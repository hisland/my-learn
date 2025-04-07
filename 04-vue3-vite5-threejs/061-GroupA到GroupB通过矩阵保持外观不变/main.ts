import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import Stats from 'three/addons/libs/stats.module.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'

const getWindowSizeInfo = () => {
  const width = Math.floor(window.innerWidth)
  const height = Math.floor(window.innerHeight)
  const obj = { width, height, aspect: width / height }

  return obj
}

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene()
const windowSizeInfo = getWindowSizeInfo()
const camera = new THREE.PerspectiveCamera(75, windowSizeInfo.aspect, 0.1, 3000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(windowSizeInfo.width, windowSizeInfo.height)
document.body.appendChild(renderer.domElement)

const frameLimiter = createDynamicFrameLimiter(60)
renderer.setAnimationLoop(frameLimiter.loop)

const stats = new Stats()
document.body.appendChild(stats.dom)
frameLimiter.addCallback((time) => {
  stats.update()
})

const controls = new OrbitControls(camera, renderer.domElement)
controls.minZoom = 0.5
controls.maxZoom = 2

let hasMove = false
controls.addEventListener('change', () => {
  // console.log('controls change: ')
  hasMove = true
})
controls.addEventListener('end', () => {
  // console.log('controls end: ')
})
window.addEventListener('mousedown', (event) => {
  hasMove = false
})

// Add axes helper
const axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

const transformControls = new TransformControls(camera, renderer.domElement)
scene.add(transformControls.getHelper())
window.addEventListener('keydown', (event) => {
  if (event.key === 't') transformControls.setMode('translate') // 移动
  if (event.key === 'r') transformControls.setMode('rotate') // 旋转
  if (event.key === 's') transformControls.setMode('scale') // 缩放
})
transformControls.addEventListener('dragging-changed', (event) => {
  hasMove = true
  controls.enabled = !event.value // 禁用/启用 OrbitControls
})

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
const selectedGroup = new THREE.Group()
scene.add(selectedGroup)
const boxHelper = new THREE.BoxHelper(selectedGroup, 0xffff00)
scene.add(boxHelper)
transformControls.addEventListener('change', () => {
  boxHelper.update() // 每次移动或缩放时更新边界框
})

window.addEventListener('click', (event) => {
  if (hasMove) return
  console.log('click 1234: ')
  // 计算鼠标位置（标准化设备坐标）
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
  raycaster.setFromCamera(mouse, camera)
  console.log('mouse: ', mouse)
  const list2 = raycaster.intersectObjects(scene.children)
  const list3 = list2.filter((vv) => vv.object.userData.clickable)
  // console.log('list2: ', list2)
  console.log('list3: ', list3)
  if (!event.ctrlKey) {
    const oldList = [...selectedGroup.children]
    for (const item of oldList) {
      console.log('item: ', item)
      moveNodeToGroupOrScene(item, scene)
    }
    console.log('selectedGroup ctr: ', selectedGroup.children)
  }
  if (list3.length > 0) {
    const selectedObject = list3[0] // 选中第一个碰撞的物体
    moveNodeToGroupOrScene(selectedObject.object, selectedGroup) // 移动到选中组
    updateGroupCenterWithoutMovingChildren(selectedGroup)
    transformControls.attach(selectedGroup)
    console.log('selectedGroup: ', selectedGroup.position.toArray())
    boxHelper.visible = true // 显示边界框
    boxHelper.update()
  } else {
    console.log('没有选中物体 list3: ', list3)
    transformControls.detach()
    boxHelper.visible = false // 隐藏边界框
    boxHelper.update()
  }

  console.log('selectedGroup: ', selectedGroup.children.length)
})

function updateGroupCenterWithoutMovingChildren(group: THREE.Group) {
  const boxExpand = new THREE.Box3()
  const newCenter = new THREE.Vector3()

  if (group.children.length === 0) return

  // 计算新的目标中心位置
  group.children.forEach((child) => {
    boxExpand.expandByObject(child) // 重新计算，可能是因为物体发生了变化
  })
  // console.log('boxExpand: ', boxExpand)
  boxExpand.getCenter(newCenter)
  // console.log('newCenter: ', newCenter)

  // 获取每个子物体旧的世界坐标
  const oldChildWorldPositions = group.children.map((child) => {
    const worldPosition = new THREE.Vector3()
    child.getWorldPosition(worldPosition) // 获取子物体的世界坐标
    return worldPosition
  })

  // 更新 Group 的位置
  group.position.copy(newCenter)

  // 子物体保持它们相对于新中心不变
  group.children.forEach((child, index) => {
    const localPosition = group.worldToLocal(oldChildWorldPositions[index])
    child.position.copy(localPosition)
    // console.log('child: ', child.position.toArray())
  })
}

{
  const gridMaterial = new THREE.LineBasicMaterial({
    color: 0x888888, // 网格颜色
    transparent: true, // 启用透明度
    opacity: 0.5, // 透明度（0 = 完全透明, 1 = 不透明）
  })
  const grid = new THREE.GridHelper(100, 100)
  grid.material.dispose() // 释放默认材质
  grid.material = gridMaterial // 替换为半透明材质
  scene.add(grid)
  const gridHelper = new THREE.GridHelper(100, 20, 'red', 'green')
  scene.add(gridHelper)
}

let uid = 0
function getBox() {
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const box = new THREE.Mesh(geometry, material)
  box.userData = { clickable: true, uid: uid++ }
  return box
}
{
  const g1 = new THREE.Group()
  g1.position.set(0, 0, 0)
  g1.scale.set(2, 2, 2)
  g1.rotation.set(0, Math.PI / 4, 0)
  const box1 = getBox()
  box1.position.set(-4, 0, 0)
  g1.add(box1)
  scene.add(g1)

  const g2 = new THREE.Group()
  g2.position.set(4, 0, 0)
  g2.rotation.set(Math.PI / 4, 0, 0)
  scene.add(g2)

  document.getElementById('btn11')?.addEventListener('click', () => {
    console.log('box1', box1.position.toArray(), box1.scale.toArray(), box1.rotation.toArray())
  })

  document.getElementById('btn12')?.addEventListener('click', () => {
    box1.parent?.remove(box1)
    scene.add(box1)
    console.log('box1', box1.position.toArray(), box1.scale.toArray(), box1.rotation.toArray())
  })
  document.getElementById('btn13')?.addEventListener('click', () => {
    box1.parent?.remove(box1)
    g1.add(box1)
    console.log('box1', box1.position.toArray(), box1.scale.toArray(), box1.rotation.toArray())
  })
  document.getElementById('btn14')?.addEventListener('click', () => {
    box1.parent?.remove(box1)
    g2.add(box1)
    console.log('box1', box1.position.toArray(), box1.scale.toArray(), box1.rotation.toArray())
  })

  document.getElementById('btn22')?.addEventListener('click', () => {
    moveNodeToGroupOrScene(box1, scene)

    console.log('box1', box1.position.toArray(), box1.scale.toArray(), box1.rotation.toArray())
  })
  document.getElementById('btn23')?.addEventListener('click', () => {
    moveNodeToGroupOrScene(box1, g1)
    console.log('box1', box1.position.toArray(), box1.scale.toArray(), box1.rotation.toArray())
  })
  document.getElementById('btn24')?.addEventListener('click', () => {
    moveNodeToGroupOrScene(box1, g2)
    console.log('box1', box1.position.toArray(), box1.scale.toArray(), box1.rotation.toArray())
  })
}

function moveNodeToGroupOrScene(object: THREE.Object3D, toGroup: THREE.Group | THREE.Scene) {
  // const objectWorldPosition = object.getWorldPosition(new THREE.Vector3())
  // object.parent?.remove(object)
  // const objectLocalPositionInToGroup = toGroup.worldToLocal(objectWorldPosition)
  // object.position.copy(objectLocalPositionInToGroup)
  // toGroup.add(object)

  const worldMatrix = object.matrixWorld.clone()
  console.log('worldMatrix: ', worldMatrix)
  object.parent?.remove(object)
  toGroup.add(object)

  const parentInverse = new THREE.Matrix4().copy(toGroup.matrixWorld).invert()
  const localMatrix = new THREE.Matrix4().multiplyMatrices(parentInverse, worldMatrix)

  object.matrix.copy(localMatrix)
  object.matrix.decompose(object.position, object.quaternion, object.scale)
  // object.matrixAutoUpdate = false // 禁止自动更新以避免覆盖我们设置的矩阵
}

// {
//   const geometry = new THREE.BoxGeometry(2, 2, 2)
//   const material = new THREE.MeshLambertMaterial({
//     color: 0xffffff,
//     // side: THREE.DoubleSide,
//     // side: THREE.FrontSide,
//     // side: THREE.BackSide
//   })
//   const box = new THREE.Mesh(geometry, material)
//   box.position.set(-6, 3, 0)
//   scene.add(box)
// }
// {
//   const geometry = new THREE.BoxGeometry(2, 2, 2)
//   const material = new THREE.MeshPhongMaterial({
//     color: 0x00fff0, // 基础颜色
//     specular: 0xff0000, // 高光的颜色
//     shininess: 100, // 高光的反射强度
//   })
//   const box = new THREE.Mesh(geometry, material)
//   box.position.set(-6, 3, 3)
//   scene.add(box)
// }

// 类别            材质类型                                主要特点
// 基础材质        MeshBasicMaterial                      无光照，简单着色
// 标准物理材质    MeshStandardMaterial                   物理真实渲染
// 光照相关材质    MeshLambertMaterial, MeshPhongMaterial 传统光照模型
// 高级效果材质    MeshToonMaterial, MeshNormalMaterial   特殊视觉效果
// 自定义材质      ShaderMaterial, RawShaderMaterial      自定义效果
// 线条材质        LineBasicMaterial, LineDashedMaterial  绘制线条

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
// // 创建一个带高光效果的材质
// const phongMaterial = new THREE.MeshPhongMaterial({
//   color: 0x156289, // 基础颜色
//   specular: 0xaaaaaa, // 高光的颜色
//   shininess: 100, // 高光的反射强度
// })

// // 添加光照
// const light = new THREE.DirectionalLight(0x0000ff, 0.4)
// light.position.set(10, 10, 10)
// scene.add(light)
// // 添加光照辅助器
// const lightHelper = new THREE.DirectionalLightHelper(light, 5)
// scene.add(lightHelper)

// 添加环境光
// const ambientLight = new THREE.AmbientLight(0xff0000, 0.5)
// scene.add(ambientLight)
// // 添加点光源
// const pointLight = new THREE.PointLight(0xff0000, 1, 100, 2)
// pointLight.position.set(100, 100, 100)
// scene.add(pointLight)

camera.position.x = 0
camera.position.y = 4
camera.position.z = 10
camera.lookAt(scene.position)

frameLimiter.addCallback((delta) => {
  renderer.render(scene, camera)
})

function createDynamicFrameLimiter(fps = 30) {
  const clock = new THREE.Clock() // 创建时钟
  const frameDuration = 1 / fps // 每帧时间间隔（秒）
  let accumulatedTime = 0 // 累积时间
  const callbacks: ((delta: number) => void)[] = [] // 存储渲染逻辑的数组
  function loop() {
    const delta = clock.getDelta() // 获取自上一帧的时间间隔
    accumulatedTime += delta
    // 如果达到帧时间间隔，执行渲染逻辑
    if (accumulatedTime >= frameDuration) {
      accumulatedTime = 0
      callbacks.forEach((callback) => callback(delta)) // 执行所有渲染逻辑
    }
  }
  return {
    loop, // 给 renderer.setAnimationLoop 使用
    addCallback(callback: (delta: number) => void) {
      callbacks.push(callback) // 动态添加渲染逻辑
    },
    removeCallback(callback: (delta: number) => void) {
      const index = callbacks.indexOf(callback)
      if (index > -1) callbacks.splice(index, 1) // 动态移除渲染逻辑
    },
    clearCallbacks() {
      callbacks.length = 0 // 清空所有渲染逻辑
    },
  }
}

// 调整窗口大小
window.addEventListener('resize', () => {
  const windowSizeInfo = getWindowSizeInfo()
  camera.aspect = windowSizeInfo.aspect
  camera.updateProjectionMatrix()
  renderer.setSize(windowSizeInfo.width, windowSizeInfo.height)
})
