import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import Stats from 'three/addons/libs/stats.module.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'

const getWindowSizeInfo = () => {
  const width = Math.floor(window.innerWidth)
  const height = Math.floor(window.innerHeight)
  const obj = { width, height, aspect: width / height }

  return obj
}

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene()
const windowSizeInfo = getWindowSizeInfo()
const camera = new THREE.PerspectiveCamera(75, windowSizeInfo.aspect, 0.1, 3000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(windowSizeInfo.width, windowSizeInfo.height)
document.body.appendChild(renderer.domElement)

const frameLimiter = createDynamicFrameLimiter(60)
renderer.setAnimationLoop(frameLimiter.loop)

const stats = new Stats()
document.body.appendChild(stats.dom)
frameLimiter.addCallback((time) => {
  stats.update()
})

const controls = new OrbitControls(camera, renderer.domElement)
controls.minZoom = 0.5
controls.maxZoom = 2

let hasMove = false
controls.addEventListener('change', () => {
  // console.log('controls change: ')
  hasMove = true
})
controls.addEventListener('end', () => {
  // console.log('controls end: ')
})
window.addEventListener('mousedown', (event) => {
  hasMove = false
})

// Add axes helper
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

const transformControls = new TransformControls(camera, renderer.domElement)
scene.add(transformControls.getHelper())
window.addEventListener('keydown', (event) => {
  if (event.key === 't') transformControls.setMode('translate') // 移动
  if (event.key === 'r') transformControls.setMode('rotate') // 旋转
  if (event.key === 's') transformControls.setMode('scale') // 缩放
})
transformControls.addEventListener('dragging-changed', (event) => {
  hasMove = true
  controls.enabled = !event.value // 禁用/启用 OrbitControls
})

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
const selectedGroup = new THREE.Group()
scene.add(selectedGroup)
const boxHelper = new THREE.BoxHelper(selectedGroup, 0xffff00)
scene.add(boxHelper)
transformControls.addEventListener('change', () => {
  boxHelper.update() // 每次移动或缩放时更新边界框
})

import * as THREE from 'three'

type TopoTextRectType = {
  id: string
  nodeType: 'textRect'
  position: [number, number, number]
  rotation: [number, number, number]
  width: number
  height: number
  bgColor: string
  borderStyle: string
  borderCorlor: string
  borderSize: number
  text: string
  textStyle: string
  textSize: number
  textColor: string
  padding: [number, number, number, number]
  alignment: string
  verticalAlign: string
  textDirection: string
}

function createCanvasTexture(config: TopoTextRectType): {
  texture: THREE.CanvasTexture
  width: number
  height: number
} {
  const {
    width,
    height,
    bgColor,
    borderStyle,
    borderCorlor,
    borderSize,
    text,
    textStyle,
    textSize,
    textColor,
    padding,
    alignment,
    verticalAlign,
    textDirection,
  } = config

  const canvas = document.createElement('canvas')
  const scale = 4 // 提高分辨率
  canvas.width = width * scale
  canvas.height = height * scale

  const ctx = canvas.getContext('2d')!
  ctx.scale(scale, scale)

  // 背景
  ctx.fillStyle = bgColor
  ctx.fillRect(0, 0, width, height)

  // 边框
  if (borderSize > 0) {
    ctx.lineWidth = borderSize
    ctx.strokeStyle = borderCorlor
    ctx.setLineDash(borderStyle === 'dashed' ? [10, 5] : [])
    ctx.strokeRect(borderSize / 2, borderSize / 2, width - borderSize, height - borderSize)
  }

  // 文字
  ctx.font = `${textStyle} ${textSize}px sans-serif`
  ctx.fillStyle = textColor
  ctx.textAlign = alignment as CanvasTextAlign
  ctx.textBaseline = verticalAlign as CanvasTextBaseline
  ctx.direction = textDirection as CanvasDirection

  const [pTop, pRight, pBottom, pLeft] = padding

  const x = alignment === 'center' ? width / 2 : alignment === 'right' ? width - pRight : pLeft

  const y =
    verticalAlign === 'middle' ? height / 2 : verticalAlign === 'bottom' ? height - pBottom : pTop

  ctx.fillText(text, x, y)

  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.LinearFilter
  texture.needsUpdate = true

  return { texture, width, height }
}

export function createTopoTextRect(config: TopoTextRectType): THREE.Mesh {
  const { texture, width, height } = createCanvasTexture(config)
  const geometry = new THREE.PlaneGeometry(width, height)
  const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true,side: THREE.DoubleSide })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.name = config.id
  mesh.position.set(...config.position)
  mesh.rotation.set(...config.rotation)
  return mesh
}

export function updateTopoTextRect(mesh: THREE.Mesh, config: TopoTextRectType): void {
  const { texture, width, height } = createCanvasTexture(config)

  // 更新几何体
  mesh.geometry.dispose()
  mesh.geometry = new THREE.PlaneGeometry(width, height)

  // 更新贴图
  const material = mesh.material as THREE.MeshBasicMaterial
  if (material.map) material.map.dispose()
  material.map = texture
  material.needsUpdate = true

  // 更新位置与旋转
  mesh.position.set(...config.position)
  mesh.rotation.set(...config.rotation)
}

const topoRectConfig: TopoTextRectType = {
  id: 'rect-1',
  nodeType: 'textRect',
  width: 50,
  height: 50,
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  bgColor: '#336699',
  borderStyle: 'solid',
  borderCorlor: '#ffffff',
  borderSize: 4,
  text: 'Hello Topo',
  textStyle: 'bold',
  textSize: 36,
  textColor: '#ffffff',
  padding: [20, 20, 20, 20],
  alignment: 'center',
  verticalAlign: 'middle',
  textDirection: 'ltr',
}

const mesh = createTopoTextRect(topoRectConfig)
// 创建矩形 Mesh
scene.add(mesh)

{
  // 环境光
  const ambientLight = new THREE.AmbientLight(0x404040, 0.5) // 环境光，提供柔和的整体光照
  scene.add(ambientLight)
}

{
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1) // 平行光，模拟太阳光
  directionalLight.position.set(5, 10, 7.5)
  scene.add(directionalLight)
  const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
  scene.add(lightHelper)
}

{
  const directionalLight = new THREE.DirectionalLight(0xff0000, 1) // 平行光，模拟太阳光
  directionalLight.position.set(5, 10, -7.5)
  scene.add(directionalLight)
  const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
  scene.add(lightHelper)
}

camera.position.x = 0
camera.position.y = 4
camera.position.z = 10
camera.lookAt(scene.position)

frameLimiter.addCallback((delta) => {
  renderer.render(scene, camera)
})

function createDynamicFrameLimiter(fps = 30) {
  const clock = new THREE.Clock() // 创建时钟
  const frameDuration = 1 / fps // 每帧时间间隔（秒）
  let accumulatedTime = 0 // 累积时间
  const callbacks: ((delta: number) => void)[] = [] // 存储渲染逻辑的数组
  function loop() {
    const delta = clock.getDelta() // 获取自上一帧的时间间隔
    accumulatedTime += delta
    // 如果达到帧时间间隔，执行渲染逻辑
    if (accumulatedTime >= frameDuration) {
      accumulatedTime = 0
      callbacks.forEach((callback) => callback(delta)) // 执行所有渲染逻辑
    }
  }
  return {
    loop, // 给 renderer.setAnimationLoop 使用
    addCallback(callback: (delta: number) => void) {
      callbacks.push(callback) // 动态添加渲染逻辑
    },
    removeCallback(callback: (delta: number) => void) {
      const index = callbacks.indexOf(callback)
      if (index > -1) callbacks.splice(index, 1) // 动态移除渲染逻辑
    },
    clearCallbacks() {
      callbacks.length = 0 // 清空所有渲染逻辑
    },
  }
}

// 调整窗口大小
window.addEventListener('resize', () => {
  const windowSizeInfo = getWindowSizeInfo()
  camera.aspect = windowSizeInfo.aspect
  camera.updateProjectionMatrix()
  renderer.setSize(windowSizeInfo.width, windowSizeInfo.height)
})
