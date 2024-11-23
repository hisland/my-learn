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
const camera = new THREE.PerspectiveCamera(75, windowSizeInfo.aspect, 0.1, 15000)
// const camera = new THREE.OrthographicCamera(
//   30000 / -2,
//   30000 / 2,
//   30000 / 2,
//   30000 / -2,
//   0.1,
//   100000
// )
const renderer = new THREE.WebGLRenderer()
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

box1.children[0].material = new THREE.MeshPhongMaterial({
  // 一种非光泽表面的材质，没有镜面高光
  color: 0xffffff,
})
box1.children[1].material = new THREE.MeshPhongMaterial({
  // 一种非光泽表面的材质，没有镜面高光
  color: 0xff00ff,
})
box1.children[2].material = new THREE.MeshPhongMaterial({
  // 一种非光泽表面的材质，没有镜面高光
  color: 0xffff00,
})
scene.add(box1)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(-10000, 5000, -10000)
scene.add(directionalLight)
const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1, 0x00ff00)
scene.add(dirLightHelper)

camera.position.x = 5000
camera.position.y = 2000
camera.position.z = 10000
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
