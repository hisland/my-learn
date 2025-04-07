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

// grid

const gridHelper = new THREE.GridHelper()
scene.add(gridHelper)

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

// 创建两个立方体
const box1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
)
const box2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
)

// 将2个物体换成 2个fbx模型
const loader = new FBXLoader()
const pingtai = await loader.loadAsync('../static/model/tai.fbx')
const pc = await loader.loadAsync('../static/model/pc.fbx')

function setModel(fbxModel: THREE.Group, box: THREE.Mesh) {
  const box3 = new THREE.Box3().setFromObject(fbxModel)
  const modelSize = box3.getSize(new THREE.Vector3()) // 获取模型的尺寸
  console.log('modelSize: ', modelSize)

  // 获取并打印 Mesh 的尺寸
  const box4 = new THREE.Box3().setFromObject(box)
  const size = new THREE.Vector3()
  box4.getSize(size)
  console.log('size: ', size)

  // 计算等比缩放比例
  const scaleRatio =
    Math.min(size.x / modelSize.x, size.y / modelSize.y, size.z / modelSize.z) * 1.2
  // 应用计算的缩放比例
  fbxModel.scale.set(scaleRatio, scaleRatio, scaleRatio)

  // 将 FBX 模型添加到 Box 中
  box.add(fbxModel)

  // 设置模型的位置，使其位于 Box 内部的中心
  fbxModel.position.set(0, 0, 0)
}

setModel(pingtai, box1)
setModel(pc, box2)

box1.position.set(-2, 0, 0)
box2.position.set(2, 0, 0)
scene.add(box1, box2)

// 创建连线
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 })
const lineGeometry = new THREE.BufferGeometry().setFromPoints([box1.position, box2.position])
const line = new THREE.Line(lineGeometry, lineMaterial)
scene.add(line)

// 添加 TransformControls
const transformControls = new TransformControls(camera, renderer.domElement)
scene.add(transformControls.getHelper())
// 默认选中第一个立方体
transformControls.attach(box1)
// 更新连线
transformControls.addEventListener('change', () => {
  line.geometry.setFromPoints([box1.position, box2.position])
})

// 避免 TransformControls 与 OrbitControls 冲突
transformControls.addEventListener('dragging-changed', (event) => {
  controls.enabled = !event.value // 禁用/启用 OrbitControls
})
// 切换目标对象
window.addEventListener('keydown', (event) => {
  if (event.key === '1') transformControls.attach(box1) // 选择 box1
  if (event.key === '2') transformControls.attach(box2) // 选择 box2
})

// Raycaster 和鼠标
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
const objects = [box1, box2] // 要检测点击的物体
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

// 添加环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

// camera.position.x = 5
camera.position.y = 5
camera.position.z = 5
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
