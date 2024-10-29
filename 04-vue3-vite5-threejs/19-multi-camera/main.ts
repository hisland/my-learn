import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const ASPECT_RATIO = window.innerWidth / window.innerHeight

const AMOUNT = 3

const WIDTH = (window.innerWidth / AMOUNT) * window.devicePixelRatio
const HEIGHT = (window.innerHeight / AMOUNT) * window.devicePixelRatio

const cameras: THREE.PerspectiveCamera[] = []

for (let y = 0; y < AMOUNT; y++) {
  for (let x = 0; x < AMOUNT; x++) {
    const subcamera = new THREE.PerspectiveCamera(40, ASPECT_RATIO, 0.1, 10)
    subcamera.viewport = new THREE.Vector4(
      Math.floor(x * WIDTH),
      Math.floor(y * HEIGHT),
      Math.ceil(WIDTH),
      Math.ceil(HEIGHT)
    )
    subcamera.position.x = x / AMOUNT - 0.5
    subcamera.position.y = 0.5 - y / AMOUNT
    subcamera.position.z = 1.5
    subcamera.position.multiplyScalar(2)
    subcamera.lookAt(0, 0, 0)
    subcamera.updateMatrixWorld()
    cameras.push(subcamera)
  }
}

const camera = new THREE.ArrayCamera(cameras)
camera.position.z = 3

const scene = new THREE.Scene()

scene.add(new THREE.AmbientLight(0x999999))

const light = new THREE.DirectionalLight(0xffffff, 3)
light.position.set(0.5, 0.5, 1)
light.castShadow = true
light.shadow.camera.zoom = 4 // tighter shadow map
scene.add(light)

const geometryBackground = new THREE.PlaneGeometry(100, 100)
const materialBackground = new THREE.MeshPhongMaterial({ color: 0x000066 })

const background = new THREE.Mesh(geometryBackground, materialBackground)
background.receiveShadow = true
background.position.set(0, 0, -1)
scene.add(background)

const geometryCylinder = new THREE.CylinderGeometry(0.5, 0.5, 1, 32)
const materialCylinder = new THREE.MeshPhongMaterial({ color: 0xff0000 })

const mesh = new THREE.Mesh(geometryCylinder, materialCylinder)
mesh.castShadow = true
mesh.receiveShadow = true
scene.add(mesh)

const renderer = new THREE.WebGLRenderer()
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop(animate)
renderer.shadowMap.enabled = true
document.body.appendChild(renderer.domElement)

function animate() {
  // mesh.rotation.x += 0.005
  mesh.rotation.z += 0.01

  renderer.render(scene, camera)
}
