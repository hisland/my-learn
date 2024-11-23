import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import { DragControls } from 'three/addons/controls/DragControls.js'

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

const controls = new OrbitControls(camera, renderer.domElement)
controls.minZoom = 0.5
controls.maxZoom = 2

// 创建两个立方体
const box1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
const box2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

box1.position.set(-2, 0, 0)
box2.position.set(2, 0, 0)
scene.add(box1, box2)

// 创建连线
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 })
const lineGeometry = new THREE.BufferGeometry().setFromPoints([box1.position, box2.position])
const line = new THREE.Line(lineGeometry, lineMaterial)
scene.add(line)

// 拖动控件
const dragControls = new DragControls([box1, box2], camera, renderer.domElement)
dragControls.addEventListener('drag', () => {
  // 更新连线
  line.geometry.setFromPoints([box1.position, box2.position])
})
dragControls.addEventListener('dragstart', () => {
  controls.enabled = false // 禁用 OrbitControls
})
dragControls.addEventListener('dragend', () => {
  controls.enabled = true // 启用 OrbitControls
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
