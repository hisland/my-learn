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

// 添加光照
const light = new THREE.DirectionalLight(0x0000ff, 0.4)
light.position.set(10, 10, 10)
scene.add(light)
// 添加光照辅助器
const lightHelper = new THREE.DirectionalLightHelper(light, 5)
scene.add(lightHelper)

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
