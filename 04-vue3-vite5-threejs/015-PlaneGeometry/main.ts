import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 300)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xf0f0f0)

const geometry = new THREE.PlaneGeometry(2, 2)
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
  // side: THREE.FrontSide,
  // side: THREE.BackSide
})
const plane = new THREE.Mesh(geometry, material)
scene.add(plane)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop(animate)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.minZoom = 0.5
controls.maxZoom = 2

const gridHelper = new THREE.GridHelper(20, 20)
scene.add(gridHelper)

camera.position.x = 10
camera.position.y = 10
camera.position.z = 20
camera.lookAt(scene.position)

//

function animate() {
  render()
}

function render() {
  // camera.lookAt(scene.position)

  renderer.render(scene, camera)
}
