import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DragControls } from 'three/examples/jsm/controls/DragControls'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 10

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

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
const labels: THREE.Sprite[] = []

const nodeData = [
  { name: 'Node A', position: new THREE.Vector3(-3, 0, 0) },
  { name: 'Node B', position: new THREE.Vector3(0, 0, 0) },
  { name: 'Node C', position: new THREE.Vector3(3, 0, 0) },
]

const geometry = new THREE.SphereGeometry(0.5, 32, 32)
const material = new THREE.MeshStandardMaterial({ color: 0x00aaff, roughness: 0.4, metalness: 0.3 });

function createTextSprite(text: string): THREE.Sprite {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  const fontSize = 64

  canvas.width = 256
  canvas.height = 128

  ctx.font = `${fontSize}px Arial`
  ctx.fillStyle = 'white'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, canvas.width / 2, canvas.height / 2)

  const texture = new THREE.CanvasTexture(canvas)
  texture.minFilter = THREE.LinearFilter

  const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true })
  const sprite = new THREE.Sprite(spriteMaterial)
  sprite.scale.set(2, 1, 1) // 控制大小

  return sprite
}

nodeData.forEach((data) => {
  const sphere = new THREE.Mesh(geometry, material.clone())
  sphere.position.copy(data.position)
  scene.add(sphere)
  nodes.push(sphere)

  const label = createTextSprite(data.name)
  label.position.set(0, 1.2, 0) // 相对节点位置
  sphere.add(label) // 绑定到节点
  labels.push(label)
})

const dragControls = new DragControls(nodes, camera, renderer.domElement)
dragControls.addEventListener('dragstart', () => {
  controls.enabled = false
})
dragControls.addEventListener('dragend', () => {
  controls.enabled = true
})

// 标签开关显示
let labelsVisible = true
window.addEventListener('keydown', (e) => {
  if (e.key === 'l') {
    labelsVisible = !labelsVisible
    labels.forEach((label) => {
      label.visible = labelsVisible
    })
  }
})

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
