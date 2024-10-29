import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 300)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xf0f0f0)

const geometry = new THREE.BoxGeometry(2, 2, 2)
const material = new THREE.MeshLambertMaterial({
  color: 0xffff00,
  // side: THREE.DoubleSide,
  // side: THREE.FrontSide,
  // side: THREE.BackSide
})
const box = new THREE.Mesh(geometry, material)
scene.add(box)

const pointLight = new THREE.PointLight(0x0000ff, 1.0)
pointLight.position.set(0, 8, 0)
scene.add(pointLight)
const pointLightHelper = new THREE.PointLightHelper(pointLight, 1)
scene.add(pointLightHelper)

const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
directionalLight.position.set(5, 5, 5)
directionalLight.target = box
scene.add(directionalLight)
const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1, 0x00ff00)
scene.add(dirLightHelper)

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

camera.position.x = -10
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
