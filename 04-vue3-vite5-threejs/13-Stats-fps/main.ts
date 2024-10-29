import * as THREE from 'three'

import Stats from 'three/addons/libs/stats.module.js'

let container, stats
let camera, scene, renderer

const radius = 5

init()

function init() {
  container = document.createElement('div')
  document.body.appendChild(container)

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100)

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f0f0)

  scene.add(camera)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setAnimationLoop(animate)
  container.appendChild(renderer.domElement)

  stats = new Stats()
  container.appendChild(stats.dom)
}

function animate() {
  render()
  stats.update()
}

function render() {
  camera.lookAt(scene.position)

  renderer.render(scene, camera)
}
