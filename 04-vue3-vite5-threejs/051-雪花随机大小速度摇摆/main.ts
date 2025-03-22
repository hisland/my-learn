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
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

{
  // 创建粒子几何
  const snowflakeCount = 1000 // 雪花数量
  const snowflakeGeometry = new THREE.BufferGeometry()
  const snowflakePositions = new Float32Array(snowflakeCount * 3) // 每个雪花的 x, y, z 坐标
  const snowflakeVelocities = new Float32Array(snowflakeCount) // 雪花下落速度
  const snowflakeSizes = new Float32Array(snowflakeCount) // 雪花大小
  const snowflakeOscillationSpeeds = new Float32Array(snowflakeCount) // 左右摇摆速度

  for (let index = 0; index < snowflakeCount; index++) {
    snowflakePositions[index * 3] = (Math.random() - 0.5) * 20 // x 坐标
    snowflakePositions[index * 3 + 1] = Math.random() * 20 // y 坐标
    snowflakePositions[index * 3 + 2] = (Math.random() - 0.5) * 20 // z 坐标
    snowflakeVelocities[index] = Math.random() * 0.05 + 0.02 // 随机下落速度
    snowflakeSizes[index] = Math.random() * 0.1 + 0.05 // 随机大小
    snowflakeOscillationSpeeds[index] = Math.random() * 0.005 + 0.002 // 左右摇摆速度
  }

  snowflakeGeometry.setAttribute('position', new THREE.BufferAttribute(snowflakePositions, 3))
  snowflakeGeometry.setAttribute('size', new THREE.BufferAttribute(snowflakeSizes, 1))
  snowflakeGeometry.userData.velocities = snowflakeVelocities
  snowflakeGeometry.userData.oscillationSpeeds = snowflakeOscillationSpeeds

  // 创建粒子材质
  const snowflakeMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
    size: 0.05,
    sizeAttenuation: true, // 随距离调整大小
  })

  // 创建粒子系统
  const snowflakeSystem = new THREE.Points(snowflakeGeometry, snowflakeMaterial)
  scene.add(snowflakeSystem)

  frameLimiter.addCallback((delta, elapsedTime) => {
    const snowflakePositionArray = snowflakeGeometry.attributes.position.array
    const snowflakeVelocityArray = snowflakeGeometry.userData.velocities
    const snowflakeOscillationSpeedArray = snowflakeGeometry.userData.oscillationSpeeds

    for (let index = 0; index < snowflakeCount; index++) {
      // y 方向下降
      snowflakePositionArray[index * 3 + 1] -= snowflakeVelocityArray[index]

      // x 方向左右摇摆
      snowflakePositionArray[index * 3] +=
        Math.sin(elapsedTime * snowflakeOscillationSpeedArray[index]) * 0.05

      // 如果雪花到达底部，则重置到顶部
      if (snowflakePositionArray[index * 3 + 1] < -5) {
        snowflakePositionArray[index * 3 + 1] = 10 // 重置 y 坐标到顶部
        snowflakePositionArray[index * 3] = (Math.random() - 0.5) * 20 // 随机 x 坐标
        snowflakePositionArray[index * 3 + 2] = (Math.random() - 0.5) * 20 // 随机 z 坐标
      }
    }

    // 更新几何数据
    snowflakeGeometry.attributes.position.needsUpdate = true
  })
}

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
  const callbacks: ((delta: number, elapsedTime: number) => void)[] = [] // 存储渲染逻辑的数组
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
    addCallback(callback: (delta: number, elapsedTime: number) => void) {
      callbacks.push(callback) // 动态添加渲染逻辑
    },
    removeCallback(callback: (delta: number, elapsedTime: number) => void) {
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
