import * as THREE from 'three'

import Stats from 'three/addons/libs/stats.module.js'

import { SelectionBox } from 'three/addons/interactive/SelectionBox.js'
import { SelectionHelper } from 'three/addons/interactive/SelectionHelper.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const container = document.createElement('div')
document.body.appendChild(container)

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 500)
camera.position.x = 5
camera.position.y = 5
camera.position.z = 20

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xf0f0f0)

scene.add(new THREE.AmbientLight(0xaaaaaa))

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop(animate)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap

container.appendChild(renderer.domElement)

scene.add(new THREE.AxesHelper(10))
console.log('scene: ', scene)

const controls = new OrbitControls(camera, renderer.domElement)
controls.minZoom = 0.5
controls.maxZoom = 3

//

function animate() {
  renderer.render(scene, camera)
}
