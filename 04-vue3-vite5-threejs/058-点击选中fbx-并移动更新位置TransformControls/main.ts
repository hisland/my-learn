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
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

function saveCameraState(camera: THREE.PerspectiveCamera) {
  const cameraState = {
    position: camera.position.toArray(),
    rotation: camera.rotation.toArray(),
    fov: camera.fov,
    aspect: camera.aspect,
    near: camera.near,
    far: camera.far,
  }

  localStorage.setItem('cameraState', JSON.stringify(cameraState))
}
function loadCameraState(camera: THREE.PerspectiveCamera) {
  const savedState = localStorage.getItem('cameraState')
  if (savedState) {
    const cameraState = JSON.parse(savedState)
    // 恢复位置
    camera.position.fromArray(cameraState.position)
    // 恢复旋转
    camera.rotation.fromArray(cameraState.rotation)
    // 恢复其他属性
    camera.fov = cameraState.fov
    camera.aspect = cameraState.aspect
    camera.near = cameraState.near
    camera.far = cameraState.far
    // 更新摄像机的投影矩阵
    camera.updateProjectionMatrix()
  } else {
    camera.position.x = -182
    camera.position.y = 524
    camera.position.z = 1977
    camera.lookAt(scene.position)
  }
}

// 页面加载时恢复摄像机状态
loadCameraState(camera)

const frameLimiter = createDynamicFrameLimiter(60)
renderer.setAnimationLoop(frameLimiter.loop)

const stats = new Stats()
document.body.appendChild(stats.dom)
frameLimiter.addCallback((time) => {
  stats.update()
})

const controls = new OrbitControls(camera, renderer.domElement)
console.log('controls: ', controls.target)
controls.minZoom = 0.5
controls.maxZoom = 2

controls.addEventListener('change', () => {
  saveCameraState(camera)
})

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

const transformControls = new TransformControls(camera, renderer.domElement)
scene.add(transformControls)
window.addEventListener('keydown', (event) => {
  if (event.key === 't') transformControls.setMode('translate') // 移动
  if (event.key === 'r') transformControls.setMode('rotate') // 旋转
  if (event.key === 's') transformControls.setMode('scale') // 缩放
})
transformControls.addEventListener('dragging-changed', (event) => {
  controls.enabled = !event.value // 禁用/启用 OrbitControls
})

const center1 = new THREE.Vector3()
let gmodel1: THREE.Group
{
  const loader = new FBXLoader()
  const model1 = await loader.loadAsync('../static/model/攻击选手.fbx')
  gmodel1 = model1
  console.log('model1: ', model1)
  scene.add(model1)
  model1.userData = { clickable: true }

  model1.position.x = 1000
  model1.position.z = 200
  model1.updateMatrixWorld(true)
  model1.getWorldPosition(center1)

  const box = new THREE.Box3().setFromObject(model1)
  // 获取包围盒的尺寸
  const size = new THREE.Vector3()
  box.getSize(size)
  console.log('模型尺寸:', size)

  const boxHelper = new THREE.BoxHelper(model1, 0x00ff00)
  scene.add(boxHelper)
  transformControls.addEventListener('change', () => {
    boxHelper.update() // 每次移动或缩放时更新边界框
  })
}

window.addEventListener('dblclick', (event) => {
  const vector = new THREE.Vector3(0, 0, 0)
  createBoxAt(vector)
})
function createBoxAt(position: THREE.Vector3) {
  const geometry = new THREE.BoxGeometry(100, 100, 100)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const box = new THREE.Mesh(geometry, material)
  box.position.copy(position)
  box.userData = { clickable: true }
  scene.add(box)
}

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
let selectedObject: THREE.Object3D | null = null
window.addEventListener('click', (event) => {
  // 计算鼠标位置（标准化设备坐标）
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  raycaster.setFromCamera(mouse, camera)
  // console.log('scene.children: ', scene.children)
  const list2 = scene.children.filter((child) => child.userData.clickable)
  console.log('list2: ', list2)
  const list3 = list2.filter((child) => {
    const intersects = raycaster.intersectObjects([child], true)
    return intersects.length > 0
  })
  if (list3.length > 0) {
    console.log('list3: ', list3)
    selectedObject = list3[0] // 选中第一个碰撞的物体
    transformControls.attach(selectedObject)
  } else {
    console.log('没有选中物体 list3: ', list3)
  }
})

const center2 = new THREE.Vector3()
let gmodel2: THREE.Group
{
  const loader = new FBXLoader()
  const model1 = await loader.loadAsync('../static/model/防火墙.fbx')
  gmodel2 = model1
  console.log('model1 防火墙: ', model1)
  scene.add(model1)
  model1.userData = { clickable: true }

  model1.position.x = -1000
  model1.updateMatrixWorld(true)
  model1.getWorldPosition(center2)

  const box = new THREE.Box3().setFromObject(model1)
  // 获取包围盒的尺寸
  const size = new THREE.Vector3()
  box.getSize(size)
  console.log('模型尺寸:', size)

  transformControls.attach(model1)

  const boxHelper = new THREE.BoxHelper(model1, 0x00ff00)
  scene.add(boxHelper)
  transformControls.addEventListener('change', () => {
    boxHelper.update() // 每次移动或缩放时更新边界框
  })
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

  function updateLine() {
    gmodel1.updateMatrixWorld(true)
    gmodel2.updateMatrixWorld(true)

    gmodel1.getWorldPosition(center1)
    gmodel2.getWorldPosition(center2)
    // console.log('gmodel1: ', gmodel1.position, center1)
    console.log('gmodel2: ', gmodel2.position, center2)

    geometry.setFromPoints([center1, center2])
  }

  // 监听 `objectChange`，模型拖动时更新连线
  transformControls.addEventListener('objectChange', updateLine)
}

// camera.position.x = 1000
// camera.position.y = 1000
// camera.position.z = 1000
// camera.lookAt(scene.position)

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
