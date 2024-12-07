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

{
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    // side: THREE.DoubleSide,
    // side: THREE.FrontSide,
    // side: THREE.BackSide
  })
  const box = new THREE.Mesh(geometry, material)
  box.position.set(-10, 0, 0)
  scene.add(box)
}
{
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    // side: THREE.DoubleSide,
    // side: THREE.FrontSide,
    // side: THREE.BackSide
  })
  const box = new THREE.Mesh(geometry, material)
  box.position.set(3, 0, 0)
  scene.add(box)
}
{
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    // side: THREE.DoubleSide,
    // side: THREE.FrontSide,
    // side: THREE.BackSide
  })
  const box = new THREE.Mesh(geometry, material)
  box.position.set(-6, 3, 0)
  scene.add(box)
}
{
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshPhongMaterial({
    color: 0x00fff0, // 基础颜色
    specular: 0xff0000, // 高光的颜色
    shininess: 100, // 高光的反射强度
  })
  const box = new THREE.Mesh(geometry, material)
  box.position.set(-6, 3, 3)
  scene.add(box)
}

// 类别            材质类型                                主要特点
// 基础材质        MeshBasicMaterial                      无光照，简单着色
// 标准物理材质    MeshStandardMaterial                   物理真实渲染
// 光照相关材质    MeshLambertMaterial, MeshPhongMaterial 传统光照模型
// 高级效果材质    MeshToonMaterial, MeshNormalMaterial   特殊视觉效果
// 自定义材质      ShaderMaterial, RawShaderMaterial      自定义效果
// 线条材质        LineBasicMaterial, LineDashedMaterial  绘制线条

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
// // 创建一个带高光效果的材质
// const phongMaterial = new THREE.MeshPhongMaterial({
//   color: 0x156289, // 基础颜色
//   specular: 0xaaaaaa, // 高光的颜色
//   shininess: 100, // 高光的反射强度
// })

// // 添加光照
// const light = new THREE.DirectionalLight(0x0000ff, 0.4)
// light.position.set(10, 10, 10)
// scene.add(light)
// // 添加光照辅助器
// const lightHelper = new THREE.DirectionalLightHelper(light, 5)
// scene.add(lightHelper)

// 添加环境光
// const ambientLight = new THREE.AmbientLight(0xff0000, 0.5)
// scene.add(ambientLight)
// // 添加点光源
// const pointLight = new THREE.PointLight(0xff0000, 1, 100, 2)
// pointLight.position.set(100, 100, 100)
// scene.add(pointLight)

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
