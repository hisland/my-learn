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

// 将2个物体换成 2个fbx模型
const loader = new FBXLoader()
const box1 = await loader.loadAsync('../static/box-test/交换机-无贴图.fbx')
const textureLoader = new THREE.TextureLoader()
const texture1 = await textureLoader.loadAsync('../static/box-test/交换机-默认.png')
const texture2 = await textureLoader.loadAsync('../static/box-test/交换机-正常.png')
// Cube_001纯色.fbx
// Cube_004全贴图.fbx
// Cube_004无材质.fbx
// Cube_004贴图加纯色.fbx
// 交换机-含贴图.fbx
// 交换机-无贴图.fbx
// 交换机-正常.png
// 交换机-默认.png
// guang1.png
// normal.png

function setModel(fbxModel: THREE.Group, texture1: THREE.Texture) {
  fbxModel.traverse((child) => {
    console.log('child: ', child)
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh
      console.log(' mesh.material: ', mesh.material)
      mesh.material = new THREE.MeshPhongMaterial({
        map: texture1,
      })
    }
  })
  const box3 = new THREE.Box3().setFromObject(fbxModel)
  const modelSize = box3.getSize(new THREE.Vector3()) // 获取模型的尺寸
  console.log('modelSize: ', modelSize)

  const size = new THREE.Vector3(1, 1, 1)

  // 计算等比缩放比例
  const scaleRatio =
    Math.min(size.x / modelSize.x, size.y / modelSize.y, size.z / modelSize.z) * 1.2
  // 应用计算的缩放比例
  fbxModel.scale.set(scaleRatio, scaleRatio, scaleRatio)
  console.log('scaleRatio: ', scaleRatio)

  // 设置模型的位置，使其位于 Box 内部的中心
  fbxModel.position.set(0, 0, 0)
}

setModel(box1, texture1)
box1.position.set(-2, 0, 0)
scene.attach(box1)

function setTexture(fbxModel: THREE.Group, texture1: THREE.Texture) {
  fbxModel.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh
      console.log('mesh: ', mesh);
      mesh.material.map = texture1
    }
  })
}

document.getElementById('set1')?.addEventListener('click', () => {
  setTexture(box1, texture1)
})
document.getElementById('set2')?.addEventListener('click', () => {
  setTexture(box1, texture2)
})

// 添加 TransformControls
const transformControls = new TransformControls(camera, renderer.domElement)
scene.add(transformControls.getHelper())
// 默认选中第一个立方体
transformControls.attach(box1)

// 避免 TransformControls 与 OrbitControls 冲突
transformControls.addEventListener('dragging-changed', (event) => {
  controls.enabled = !event.value // 禁用/启用 OrbitControls
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

{
  // 环境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 1) // 环境光，提供柔和的整体光照
  scene.add(ambientLight)
}

{
  const directionalLight = new THREE.DirectionalLight(0xff0000, 1) // 平行光，模拟太阳光
  directionalLight.position.set(5, 10, 7.5)
  scene.add(directionalLight)
  const lightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
  scene.add(lightHelper)
}

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
