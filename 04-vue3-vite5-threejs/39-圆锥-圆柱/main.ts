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
    specular: 0xffffff, // 高光的颜色
    shininess: 100, // 高光的反射强度
  })
  const box = new THREE.Mesh(geometry, material)
  box.position.set(-6, 3, 3)
  scene.add(box)
}

{
  const lineGeometry = new THREE.CylinderGeometry(0.5, 1, 2) // 水平线条
  const lineMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff }) // 白色材质
  const line = new THREE.Mesh(lineGeometry, lineMaterial)
  line.position.set(-6, -5, 0)
  scene.add(line)
}

{
  const lineGeometry = new THREE.CylinderGeometry(0, 1, 2) // 水平线条
  const lineMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff }) // 白色材质
  const line = new THREE.Mesh(lineGeometry, lineMaterial)
  line.position.set(-3, -5, 0)
  scene.add(line)
}
{
  const lineGeometry = new THREE.CylinderGeometry(0.5, 0, 2) // 水平线条
  const lineMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff }) // 白色材质
  const line = new THREE.Mesh(lineGeometry, lineMaterial)
  line.position.set(0, -5, 0)
  scene.add(line)
}
{
  const lineGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2) // 水平线条
  const lineMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff }) // 白色材质
  const line = new THREE.Mesh(lineGeometry, lineMaterial)
  line.position.set(3, -5, 0)
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
