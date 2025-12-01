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

async function getFbxFitInBox(url: string, size: number = 1) {
  const material = new THREE.MeshStandardMaterial({
    color: 0x00aaff,
    // roughness: 0.4,
    // metalness: 0.3,
    opacity: 0.2,
    transparent: true,
  })
  const loader = new FBXLoader()
  const boxNew = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), material)
  const fbxModel = await loader.loadAsync(url)
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

// const box1 = await getFbxFitInBox('../static/model/tai.fbx', 2)
// const box1 = await getFbxFitInBox('../static/model/防火墙.fbx', 2)
// const box1 = await getFbxFitInBox('../static/model/攻击选手.fbx', 2)
// const box1 = await getFbxFitInBox('../static/model/运输泵.fbx', 2)
const box1 = await getFbxFitInBox('../static/box-test/交换机-含贴图.fbx', 2)
box1.position.set(-2, 0, 0)
objGroup.add(box1)
const box2 = await getFbxFitInBox('../static/model/攻击选手.fbx', 2)
// const box2 = await getFbxFitInBox('../static/box-test/Cube_004全贴图.fbx', 2)
box2.position.set(2, 0, 0)
objGroup.add(box2)
// const box3 = await getFbxFitInBox('../static/model/防火/墙.fbx', 2)
const box3 = await getFbxFitInBox('../static/box-test/交换机-无贴图.fbx', 2)
box3.position.set(-2, 0, -3)
objGroup.add(box3)

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

// 保存物体所有原颜色
const originalColors = new WeakMap<THREE.Material, THREE.Color>()
window.sss = originalColors
let hoveredObj: THREE.Object3D | null = null
const hoverColor = new THREE.Color(0xff0000)

// 递归修改颜色
function setObjectColorRecursive(obj: THREE.Object3D, color: THREE.Color) {
  obj.traverse((child) => {
    if ((child as any).isMesh) {
      const mesh = child as THREE.Mesh

      // 材质可能是数组
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]

      materials.forEach((mat) => {
        if (mat && (mat as any).color) {
          // 保存原色（只保存一次）
          if (!originalColors.has(mat)) {
            originalColors.set(mat, mat.color.clone())
          }

          mat.color.copy(color)
        }
      })
    }
  })
}

// 递归恢复原色
function restoreObjectColorRecursive(obj: THREE.Object3D) {
  obj.traverse((child) => {
    if ((child as any).isMesh) {
      const mesh = child as THREE.Mesh
      const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]

      materials.forEach((mat) => {
        const old = originalColors.get(mat)
        if (old) mat.color.copy(old)
      })
    }
  })
}

// 鼠标移动检测 Hover
window.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(objGroup.children, false) // 注意要加 true 递归检测

  if (intersects.length > 0) {
    const obj = intersects[0].object
    console.log('obj: ', obj)

    // 切换高亮对象
    if (hoveredObj !== obj) {
      // 恢复老的
      if (hoveredObj) restoreObjectColorRecursive(hoveredObj)

      hoveredObj = obj

      // 新的高亮
      setObjectColorRecursive(hoveredObj, hoverColor)
    }

    document.body.style.cursor = 'pointer'
  } else {
    // 移出所有物体
    if (hoveredObj) {
      restoreObjectColorRecursive(hoveredObj)
      hoveredObj = null
    }

    document.body.style.cursor = 'default'
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
