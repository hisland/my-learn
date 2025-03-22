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
renderer.setAnimationLoop(animate)

const controls = new OrbitControls(camera, renderer.domElement)
controls.minZoom = 0.5
controls.maxZoom = 2

// grid

// load pingtai.fbx
const loader = new FBXLoader()
const pingtai = await loader.loadAsync('../static/model/tai.fbx')
const box = new THREE.Box3().setFromObject(pingtai)
const size = box.getSize(new THREE.Vector3())
console.log('size: ', size)

pingtai.scale.z = 0.5
pingtai.scale.y = 1.5
console.log('pingtai.scale: ', pingtai.scale)

scene.add(pingtai)

// 添加光照
const light = new THREE.DirectionalLight(0xfff000, 1)
light.position.set(100, 100, 100)
scene.add(light)
// 添加环境光
const ambientLight = new THREE.AmbientLight(0xff0000, 0.5)
scene.add(ambientLight)
// // 添加点光源
// const pointLight = new THREE.PointLight(0xff0000, 1, 100, 2)
// pointLight.position.set(100, 100, 100)
// scene.add(pointLight)

// camera.position.x = 600
camera.position.y = 600
camera.position.z = 600
camera.lookAt(scene.position)

// 动画函数
function animate() {
  renderer.render(scene, camera)
}

// 调整窗口大小
window.addEventListener('resize', () => {
  const windowSizeInfo = getWindowSizeInfo()
  camera.aspect = windowSizeInfo.aspect
  camera.updateProjectionMatrix()
  renderer.setSize(windowSizeInfo.width, windowSizeInfo.height)
})

// 开始动画
// animate()
