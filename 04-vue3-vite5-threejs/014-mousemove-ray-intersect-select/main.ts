import * as THREE from 'three'

let INTERSECTED

const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 300)

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xf0f0f0)

const light = new THREE.DirectionalLight(0xffffff, 3)
light.position.set(1, 1, 1).normalize()
scene.add(light)

const geometry = new THREE.BoxGeometry()

for (let i = 0; i < 2; i++) {
  const object = new THREE.Mesh(
    geometry,
    new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
  )

  object.position.x = 0 + i
  object.position.y = 0 + i
  object.position.z = 0 + i

  object.rotation.x = 0
  object.rotation.y = 0
  object.rotation.z = 0

  object.scale.x = 1
  object.scale.y = 1
  object.scale.z = 1

  scene.add(object)
}

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop(animate)
document.body.appendChild(renderer.domElement)

document.addEventListener('mousemove', onPointerMove)

function onPointerMove(event) {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
}

camera.position.x = 10
camera.lookAt(scene.position)

//

function animate() {
  render()
}

function render() {
  // camera.lookAt(scene.position)

  // camera.updateMatrixWorld()

  // find intersections

  raycaster.setFromCamera(pointer, camera)

  const intersects = raycaster.intersectObjects(scene.children, false)
  if (intersects.length > 0) {
    if (INTERSECTED !== intersects[0].object) {
      if (INTERSECTED) {
        INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex)
      }

      INTERSECTED = intersects[0].object
      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex()
      INTERSECTED.material.emissive.setHex(0xff0000)
    }
  } else {
    if (INTERSECTED) {
      INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex)
    }

    INTERSECTED = null
  }

  renderer.render(scene, camera)
}
