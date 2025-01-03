import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

create('container1')
create('container2')

function create(elmId: string) {
  const elm = document.getElementById(elmId)
  if (!elm) {
    return
  }
  const divWidth = elm.clientWidth
  const divHeight = elm.clientHeight
  const camera = new THREE.PerspectiveCamera(50, divWidth / divHeight, 0.1, 300)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f0f0)

  const geometry = new THREE.CircleGeometry(3)
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide,
    // side: THREE.FrontSide,
    // side: THREE.BackSide
    // wireframe: true,
  })
  const plane = new THREE.Mesh(geometry, material)
  scene.add(plane)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(divWidth, divHeight)
  renderer.setAnimationLoop(animate)
  elm.appendChild(renderer.domElement)

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
}
