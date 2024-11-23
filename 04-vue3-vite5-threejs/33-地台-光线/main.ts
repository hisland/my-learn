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
scene.background = new THREE.Color(0xffffff)
const windowSizeInfo = getWindowSizeInfo()
const camera = new THREE.PerspectiveCamera(24, windowSizeInfo.aspect, 1, 50000)
// const camera = new THREE.OrthographicCamera(
//   30000 / -2,
//   30000 / 2,
//   30000 / 2,
//   30000 / -2,
//   0.1,
//   100000
// )
const renderer = new THREE.WebGLRenderer({
  antialias: true, // true/false表示是否开启反锯齿
  alpha: true, // true/false 表示是否可以设置背景色透明
  precision: 'highp', // highp/mediump/lowp 表示着色精度选择
  premultipliedAlpha: true, // true/false 表示是否可以设置像素深度（用来度量图像的分辨率）
  preserveDrawingBuffer: true, // true/false 表示是否保存绘图缓冲
  stencil: false, // false/true 表示是否使用模板字体或图案
})
renderer.setSize(windowSizeInfo.width, windowSizeInfo.height)
document.body.appendChild(renderer.domElement)

// grid

const gridHelper = new THREE.GridHelper()
scene.add(gridHelper)

const controls = new OrbitControls(camera, renderer.domElement)
controls.minZoom = 0.5
controls.maxZoom = 2

// 将2个物体换成 2个fbx模型
const loader = new FBXLoader()
const box1 = await loader.loadAsync('../static/model/bottom.fbx')
console.log('box1: ', box1)

// box1.children[0].material = new THREE.MeshPhongMaterial({
//   // 一种非光泽表面的材质，没有镜面高光
//   color: 0xffffff,
// })
// box1.children[1].material = new THREE.MeshPhongMaterial({
//   // 一种非光泽表面的材质，没有镜面高光
//   color: 0xff00ff,
// })
// box1.children[2].material = new THREE.MeshPhongMaterial({
//   // 一种非光泽表面的材质，没有镜面高光
//   color: 0xffff00,
// })
scene.add(box1)

const directionalLight = new THREE.DirectionalLight(0xff0000, 0.4)
directionalLight.position.set(0, 1, 0)
// directionalLight.mapSize = 1024;
// directionalLight.boxSize = 4096;
scene.add(directionalLight)
// const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1, 0x00ff00)
// scene.add(dirLightHelper)

const directionalLight1 = new THREE.DirectionalLight(0x00ff00, 1)
directionalLight1.position.set(1, 100, 1)
scene.add(directionalLight1)
const dirLightHelper1 = new THREE.DirectionalLightHelper(directionalLight1, 1, 0x00ff00)
scene.add(dirLightHelper1)

const directionalLight2 = new THREE.DirectionalLight(0x0000ff, 1)
directionalLight2.position.set(1, 100, 1)
scene.add(directionalLight2)
const dirLightHelper2 = new THREE.DirectionalLightHelper(directionalLight2, 1, 0x00ff00)
scene.add(dirLightHelper2)

// camera.position.x = 5000
// camera.position.y = 2000
// camera.position.z = 10000
camera.position.set(-5316, 3551, 4563)
camera.lookAt(scene.position)

// 动画函数
function animate() {
  requestAnimationFrame(animate)

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
