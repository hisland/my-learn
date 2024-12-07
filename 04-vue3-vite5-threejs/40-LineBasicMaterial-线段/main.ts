import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'

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

const controls = new OrbitControls(camera, renderer.domElement)
controls.minZoom = 0.5
controls.maxZoom = 2

// Add axes helper
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

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
  // 创建一个几何体（例如，一个简单的线段）
  const geometry = new THREE.BufferGeometry()
  const points: THREE.Vector3[] = []
  points.push(new THREE.Vector3(-1, -2, 0)) // 起点
  points.push(new THREE.Vector3(1, -2, 0)) // 终点
  points.push(new THREE.Vector3(2, -3, 0)) // 终点
  geometry.setFromPoints(points)
  const material = new THREE.LineBasicMaterial({
    color: 0x00ff00, // 绿色
    linewidth: 1, // 线宽
    opacity: 0.5, // 不透明
    transparent: true, // 不透明
  })
  const line = new THREE.Line(geometry, material)
  // line.position.set(-6, 3, 0)
  scene.add(line)
}

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

camera.position.x = 2
camera.position.y = 4
camera.position.z = 10
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
