import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import Stats from 'three/addons/libs/stats.module.js'

const getWindowSizeInfo = () => {
  const width = Math.floor(window.innerWidth)
  const height = Math.floor(window.innerHeight)
  const obj = {
    width,
    height,
    aspect: width / height,
  }

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

// Add axes helper
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// 创建材质
const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })

// 创建小球
const ballGeometry = new THREE.SphereGeometry(0.1, 32, 32)
const ball = new THREE.Mesh(ballGeometry, ballMaterial)
scene.add(ball)

// 定义三段线段的点
const points: THREE.Vector3[] = [
  new THREE.Vector3(-2, 0, 0), // 第一段的起点
  new THREE.Vector3(0, 2, 0), // 第一段的终点，第二段的起点
  new THREE.Vector3(2, 0, 0), // 第二段的终点，第三段的起点
  new THREE.Vector3(0, -2, 0), // 第三段的终点
]

// 创建线段几何体
const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 })
const line = new THREE.Line(lineGeometry, lineMaterial)
scene.add(line)

// 变量
let segmentIndex = 0 // 当前段的索引
let currentPercent = 0 // 用于控制小球在当前段的位置
const speed = 0.01 // 小球的移动速度

// 更新小球位置
function updateBallPosition() {
  const start = points[segmentIndex]
  const end = points[segmentIndex + 1]

  // 使用lerpVectors计算小球的位置
  const position = new THREE.Vector3().lerpVectors(start, end, currentPercent)
  ball.position.copy(position)

  // 增加t的值
  currentPercent += speed

  // 如果t超过1，说明到达当前段的终点，切换到下一段
  if (currentPercent > 1) {
    currentPercent = 0 // 重置t
    segmentIndex = (segmentIndex + 1) % (points.length - 1) // 切换到下一个线段，最后一个段会回到第一个
  }
}

frameLimiter.addCallback((delta) => {
  updateBallPosition()
})

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

camera.position.x = 2
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
