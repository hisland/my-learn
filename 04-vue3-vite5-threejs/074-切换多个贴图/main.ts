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

const manager = new THREE.LoadingManager()
manager.setURLModifier((url) => {
  console.log('url: ', url)
  // if (url.endsWith('.png') || url.endsWith('.jpg') || url.endsWith('.jpeg')) {
  //   // 返回一个绝对不会发请求的空路径
  //   return ''
  // }
  // if (url.endsWith('交换机类.png')) {
  //   return '../static/box-test/交换机-正常.png'
  //   return '../static/box-test/交换机-默认.png'
  // }
  // if (url.endsWith('中间光柱.png')) {
  //   return '../static/box-test/normal.png'
  //   return '../static/box-test/guang1.png'
  // }
  return url
})

const fbxLoader = new FBXLoader(manager)
const texLoader = new THREE.TextureLoader(manager)

async function getFbxFitInBox(url: string, size: number = 1) {
  const material = new THREE.MeshStandardMaterial({
    color: 0x00aaff,
    // roughness: 0.4,
    // metalness: 0.3,
    opacity: 0.2,
    transparent: true,
  })
  const boxNew = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), material)
  const fbxModel = await fbxLoader.loadAsync(url)
  fbxModel.name = 'fbxModel123'
  console.log('fbxModel: ', fbxModel)

  setModel(fbxModel, boxNew)
  return boxNew
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

const objGroup = new THREE.Group()
scene.add(objGroup)

// const box3 = await getFbxFitInBox('../static/box-test/交换机-含贴图.fbx', 2)
const box3 = await getFbxFitInBox('../static/box-test/交换机-无贴图.fbx', 2)
box3.position.set(-2, 1, -3)
objGroup.add(box3)

// import skin2 from '../static/box-test/交换机-默认.png'

// function applyTexture(texture: THREE.Texture) {
//   modelMeshes.forEach((mesh) => {
//     const m = mesh.material as THREE.MeshStandardMaterial
//     m.map = texture
//     m.needsUpdate = true
//   })
// }

document.getElementById('btn1')?.addEventListener('click', () => {
  const fbxModel = box3.getObjectByName('fbxModel123')

  fbxModel?.traverse((child) => {
    console.log('child: ', child)
    if (child.isMesh) {
      // console.log('child: ', child)
      const mesh = child as THREE.Mesh

      const texture1 = texLoader.load('../static/box-test/交换机-正常.png')
      const texture2 = texLoader.load('../static/box-test/normal.png')

      mesh.material[0].map = texture1
      mesh.material[0].emissiveMap = texture1
      mesh.material[1].map = texture2
      mesh.material[1].alphaMap = texture2
      mesh.material[1].emissiveMap = texture2
    }
  })
})
document.getElementById('btn2')?.addEventListener('click', () => {
  const fbxModel = box3.getObjectByName('fbxModel123')

  fbxModel?.traverse((child) => {
    console.log('child: ', child)
    if (child.isMesh) {
      // console.log('child: ', child)
      const mesh = child as THREE.Mesh

      const texture1 = texLoader.load('../static/box-test/交换机-默认.png')
      const texture2 = texLoader.load('../static/box-test/guang1.png')

      mesh.material[0].map = texture1
      mesh.material[0].emissiveMap = texture1
      mesh.material[1].map = texture2
      mesh.material[1].alphaMap = texture2
      mesh.material[1].emissiveMap = texture2
    }
  })
})

// 添加 TransformControls
const transformControls = new TransformControls(camera, renderer.domElement)
scene.add(transformControls.getHelper())

// 避免 TransformControls 与 OrbitControls 冲突
transformControls.addEventListener('dragging-changed', (event) => {
  controls.enabled = !event.value // 禁用/启用 OrbitControls
})

// Raycaster 和鼠标
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
// 鼠标点击事件
window.addEventListener('click', (event) => {
  // 将鼠标坐标转换为归一化设备坐标 (NDC)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

  // 使用 Raycaster 检测点击的物体
  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(objGroup.children, false)
  console.log('transformControls click: ', isOrbitControlsChanging)

  if (intersects.length > 0) {
    const selectedObject = intersects[0].object // 获取点击的第一个物体
    transformControls.attach(selectedObject) // 绑定 TransformControls
  } else if (!isOrbitControlsChanging) {
    transformControls.detach() // 解除绑定
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
