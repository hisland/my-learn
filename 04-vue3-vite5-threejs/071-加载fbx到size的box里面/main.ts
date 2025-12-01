import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import { TransformControls } from 'three/addons/controls/TransformControls.js'

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

const gridHelper1 = new THREE.GridHelper(100, 100, '#fff', '#222')
scene.add(gridHelper1)
const gridHelper2 = new THREE.GridHelper(100, 10, 'red', 'green')
scene.add(gridHelper2)
const axesHelper1 = new THREE.AxesHelper(100)
scene.add(axesHelper1)

let isOrbitControlsChanging = false // 用来判断视角是否在变化
const controls = new OrbitControls(camera, renderer.domElement)
controls.minZoom = 0.5
controls.maxZoom = 2
// 监听 OrbitControls 的变化
controls.addEventListener('change', () => {
  // 当 OrbitControls 正在变化时，设置标志位为 true
  isOrbitControlsChanging = true
  console.log('isOrbitControlsChanging change: ', isOrbitControlsChanging)
})
// 当 OrbitControls 停止变化时，恢复标志位
controls.addEventListener('end', () => {
  setTimeout(() => {
    isOrbitControlsChanging = false
    console.log('isOrbitControlsChanging end: ', isOrbitControlsChanging)
  }, 0)
})

const material = new THREE.MeshStandardMaterial({
  color: 0x00aaff,
  // roughness: 0.4,
  // metalness: 0.3,
  opacity: 0.5,
  transparent: true,
})

async function getFbxFitInBox(url: string, size: number = 1) {
  const loader = new FBXLoader()
  const box1 = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), material)
  const fbxModel = await loader.loadAsync(url)
  setModel(fbxModel, box1)
  return box1
}

function setModel(fbxModel: THREE.Group, box: THREE.Mesh) {
  // 计算模型世界尺寸
  const modelBox = new THREE.Box3().setFromObject(fbxModel)
  const modelSize1 = modelBox.getSize(new THREE.Vector3())
  console.log('modelSize1: ', modelSize1)

  // 计算 Box 尺寸
  const boxBox = new THREE.Box3().setFromObject(box)
  const boxSize = boxBox.getSize(new THREE.Vector3())

  // 等比缩放
  const scaleRatio = Math.min(
    boxSize.x / modelSize1.x,
    boxSize.y / modelSize1.y,
    boxSize.z / modelSize1.z
  )
  fbxModel.scale.setScalar(scaleRatio)

  // 关键：缩放后重新计算模型的 bounding box（不然 min/max 还是旧的）
  const scaledBox = new THREE.Box3().setFromObject(fbxModel)

  // 模型底部（min.y），模型中心点是 (0,0,0)
  const modelBottomY = scaledBox.min.y
  // Box 的底部与高度
  const boxBottomY = -boxSize.y / 2
  // 让模型底部贴到 Box 底部
  const targetY = boxBottomY - modelBottomY

  // 先 add 再 position（因为 add 会重算 local matrix）
  box.add(fbxModel)
  // 设置底部对齐
  fbxModel.position.set(0, targetY, 0)
}

// const box1 = await getFbxFitInBox('../static/model/tai.fbx', 2)
// const box1 = await getFbxFitInBox('../static/model/防火墙.fbx', 2)
// const box1 = await getFbxFitInBox('../static/model/攻击选手.fbx', 2)
const box1 = await getFbxFitInBox('../static/model/运输泵.fbx', 2)

box1.position.set(-2, 0, 0)
scene.add(box1)

// 添加 TransformControls
const transformControls = new TransformControls(camera, renderer.domElement)
scene.add(transformControls.getHelper())

// 避免 TransformControls 与 OrbitControls 冲突
transformControls.addEventListener('dragging-changed', (event) => {
  controls.enabled = !event.value // 禁用/启用 OrbitControls
})
// 切换目标对象
window.addEventListener('keydown', (event) => {
  if (event.key === '1') transformControls.attach(box1) // 选择 box1
})

// Raycaster 和鼠标
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
const objects = [box1] // 要检测点击的物体
// 鼠标点击事件
window.addEventListener('click', (event) => {
  // 将鼠标坐标转换为归一化设备坐标 (NDC)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

  // 使用 Raycaster 检测点击的物体
  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(objects)
  console.log('transformControls click: ', isOrbitControlsChanging)

  if (intersects.length > 0) {
    const selectedObject = intersects[0].object // 获取点击的第一个物体
    transformControls.attach(selectedObject) // 绑定 TransformControls
  } else if (!isOrbitControlsChanging) {
    transformControls.detach() // 解除绑定
  }
})
// 鼠标移入变手形
window.addEventListener('mousemove', (event) => {
  // 将鼠标坐标转换为归一化设备坐标 (NDC)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

  // 使用 Raycaster 检测鼠标悬停的物体
  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(objects)

  // 如果有物体被悬停，变成手形光标，否则恢复默认
  if (intersects.length > 0) {
    document.body.style.cursor = 'pointer'
  } else {
    document.body.style.cursor = 'default'
  }
})

// 添加环境光（柔和照明）
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5) // 亮度 0.5
scene.add(ambientLight)

// 添加方向光（主光源）
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(5, 10, 7.5) // 光照方向
scene.add(directionalLight)

// 可选：添加辅助光源显示器
const lightHelper = new THREE.DirectionalLightHelper(directionalLight)
scene.add(lightHelper)

camera.position.x = 1
camera.position.y = 2
camera.position.z = 3
camera.lookAt(scene.position)

// 动画函数
function animate() {
  renderer.render(scene, camera)
}
renderer.setAnimationLoop(animate)

// 调整窗口大小
window.addEventListener('resize', () => {
  const windowSizeInfo = getWindowSizeInfo()
  camera.aspect = windowSizeInfo.aspect
  camera.updateProjectionMatrix()
  renderer.setSize(windowSizeInfo.width, windowSizeInfo.height)
})
