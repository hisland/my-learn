import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import Stats from 'three/addons/libs/stats.module.js'

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
renderer.shadowMap.enabled = true
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

// Add axes helper
const axesHelper = new THREE.AxesHelper(1000)
scene.add(axesHelper)

{
  // 环境光
  const ambientLight = new THREE.AmbientLight(0x404040, 0.5) // 环境光，提供柔和的整体光照
  scene.add(ambientLight)
}

{
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1) // 平行光，模拟太阳光
  directionalLight.position.set(2, 5, 0)
  directionalLight.castShadow = true // 投射阴影
  scene.add(directionalLight)
  const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
  scene.add(lightHelper)
}

const center1 = new THREE.Vector3()
{
  const loader = new FBXLoader()
  const model1 = await loader.loadAsync('../static/model/攻击选手.fbx')
  console.log('model1: ', model1)
  scene.add(model1)

  model1.position.x = 1000
  model1.position.z = 200
  model1.updateMatrixWorld(true)
  model1.getWorldPosition(center1)

  const box = new THREE.Box3().setFromObject(model1)
  // 获取包围盒的尺寸
  const size = new THREE.Vector3()
  box.getSize(size)
  console.log('模型尺寸:', size)
}

const center2 = new THREE.Vector3()
{
  const loader = new FBXLoader()
  const model1 = await loader.loadAsync('../static/model/防火墙.fbx')
  console.log('model1: ', model1)
  scene.add(model1)

  model1.position.x = -1000
  model1.updateMatrixWorld(true)
  model1.getWorldPosition(center2)

  const box = new THREE.Box3().setFromObject(model1)
  // 获取包围盒的尺寸
  const size = new THREE.Vector3()
  box.getSize(size)
  console.log('模型尺寸:', size)
}

{
  // 创建连线的几何体
  const points = [center1, center2]
  const geometry = new THREE.BufferGeometry().setFromPoints(points)
  // 创建连线的材质
  const material = new THREE.LineBasicMaterial({ color: 0xff0000 })
  // 创建连线
  const line = new THREE.Line(geometry, material)
  scene.add(line)
}

camera.position.x = 1000
camera.position.y = 1000
camera.position.z = 1000
camera.lookAt(scene.position)

frameLimiter.addCallback((delta) => {
  renderer.render(scene, camera)
})

type CallbackFn = (delta: number, elapsedTime: number) => void

function createDynamicFrameLimiter(fps = 30) {
  const clock = new THREE.Clock() // 创建时钟
  const frameDuration = 1 / fps // 每帧时间间隔（秒）
  let accumulatedTime = 0 // 累积时间
  const callbacks: CallbackFn[] = [] // 存储渲染逻辑的数组
  function loop() {
    const delta = clock.getDelta() // 获取自上一帧的时间间隔
    const elapsedTime = clock.getElapsedTime()
    accumulatedTime += delta
    // 如果达到帧时间间隔，执行渲染逻辑
    if (accumulatedTime >= frameDuration) {
      accumulatedTime = 0
      callbacks.forEach((callback) => callback(delta, elapsedTime)) // 执行所有渲染逻辑
    }
  }
  return {
    loop, // 给 renderer.setAnimationLoop 使用
    addCallback(callback: CallbackFn) {
      callbacks.push(callback) // 动态添加渲染逻辑
    },
    removeCallback(callback: CallbackFn) {
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
