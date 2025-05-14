import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 10

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const labelRenderer = new CSS2DRenderer()
labelRenderer.setSize(window.innerWidth, window.innerHeight)
labelRenderer.domElement.style.position = 'absolute'
labelRenderer.domElement.style.top = '0'
labelRenderer.domElement.style.pointerEvents = 'none'
document.body.appendChild(labelRenderer.domElement)

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

const controls = new OrbitControls(camera, renderer.domElement)

const nodes: THREE.Mesh[] = []
const labels: CSS2DObject[] = []

const nodeData = [
  { name: 'Node A', position: new THREE.Vector3(-3, 0, 0) },
  { name: 'Node B', position: new THREE.Vector3(0, 0, 0) },
  { name: 'Node C', position: new THREE.Vector3(3, 0, 0) },
]

const geometry = new THREE.SphereGeometry(0.5, 32, 32)
const material = new THREE.MeshStandardMaterial({ color: 0x00aaff, roughness: 0.4, metalness: 0.3 })

nodeData.forEach((data) => {
  const sphere = new THREE.Mesh(geometry, material.clone())
  sphere.position.copy(data.position)
  scene.add(sphere)
  nodes.push(sphere)

  // 创建 HTML 标签
  const div = document.createElement('div')
  div.className = 'label'
  div.textContent = data.name
  div.style.color = 'white'
  div.style.fontSize = '16px'
  div.style.marginTop = '-1em'

  const label = new CSS2DObject(div)
  label.position.set(0, 1, 0) // 文字高出节点
  sphere.add(label)
  labels.push(label)
})

// 拖拽控制
const dragControls = new DragControls(nodes, camera, renderer.domElement)
dragControls.addEventListener('dragstart', () => {
  controls.enabled = false
})
dragControls.addEventListener('dragend', () => {
  controls.enabled = true
})

// 开关控制标签显示
let labelsVisible = true
window.addEventListener('keydown', (e) => {
  if (e.key === 'l') {
    labelsVisible = !labelsVisible
    labels.forEach((label) => {
      ;(label.element as HTMLElement).style.display = labelsVisible ? 'block' : 'none'
    })
  }
})

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  labelRenderer.render(scene, camera)
}

animate()

// 适配窗口大小变化
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  labelRenderer.setSize(window.innerWidth, window.innerHeight)
})
