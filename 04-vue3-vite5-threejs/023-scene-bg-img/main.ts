import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 300)

const scene = new THREE.Scene()
scene.background = new THREE.TextureLoader().load('./px.png')

const plane1 = new THREE.PlaneGeometry(3, 3)
const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  // side: THREE.DoubleSide,
  // side: THREE.FrontSide,
  // side: THREE.BackSide
  // wireframe: true,
})
const box = new THREE.Mesh(geometry, material)
scene.add(box)
const plane2 = new THREE.Mesh(plane1, material)
scene.add(plane2)

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
