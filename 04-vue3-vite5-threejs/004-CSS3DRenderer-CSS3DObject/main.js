import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js'

const renderer = new CSS3DRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 500)
camera.lookAt(0, 0, 0)

const controls = new OrbitControls(camera, renderer.domElement)
controls.minZoom = 0.5
controls.maxZoom = 2

const scene = new THREE.Scene()
scene.background = new THREE.Color(0x00a000)
const material = new THREE.LineBasicMaterial({ color: 0x00ffff })
const points = []
points.push(new THREE.Vector3(-10, 0, 0))
points.push(new THREE.Vector3(0, 10, 0))
points.push(new THREE.Vector3(10, 0, 0))

const geometry = new THREE.BufferGeometry().setFromPoints(points)
const line = new THREE.Line(geometry, material)
scene.add(line)

// left
createPlane(
  100,
  100,
  'chocolate',
  new THREE.Vector3(-50, 0, 0),
  new THREE.Euler(0, -90 * THREE.MathUtils.DEG2RAD, 0)
)
// right
createPlane(100, 100, 'saddlebrown', new THREE.Vector3(0, 0, 50), new THREE.Euler(0, 0, 0))
// top
createPlane(
  100,
  100,
  'yellowgreen',
  new THREE.Vector3(0, 50, 0),
  new THREE.Euler(-90 * THREE.MathUtils.DEG2RAD, 0, 0)
)
// bottom
createPlane(
  300,
  300,
  'seagreen',
  new THREE.Vector3(0, -50, 0),
  new THREE.Euler(-90 * THREE.MathUtils.DEG2RAD, 0, 0)
)

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()

function createPlane(width, height, cssColor, pos, rot) {
  const element = document.createElement('div')
  element.style.width = width + 'px'
  element.style.height = height + 'px'
  element.style.opacity = 0.75
  element.style.background = cssColor

  const object = new CSS3DObject(element)
  object.position.copy(pos)
  object.rotation.copy(rot)
  scene.add(object)

  const geometry = new THREE.PlaneGeometry(width, height)
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.copy(object.position)
  mesh.rotation.copy(object.rotation)
  scene.add(mesh)
}
