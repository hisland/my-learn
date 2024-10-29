import * as THREE from 'three'

let isShiftDown = false

const objects = [] as THREE.Object3D[]

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000)
camera.position.set(500, 800, 1300)
camera.lookAt(0, 0, 0)

const scene = new THREE.Scene()
console.log('scene: ', scene)
scene.background = new THREE.Color(0xf0f0f0)

// roll-over helpers

const rollOverGeo = new THREE.BoxGeometry(50, 50, 50)
const rollOverMaterial = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  opacity: 0.5,
  transparent: true
})
const rollOverMesh = new THREE.Mesh(rollOverGeo, rollOverMaterial)
scene.add(rollOverMesh)

// cubes

const map = new THREE.TextureLoader().load('./square-outline-textured.png')
map.colorSpace = THREE.SRGBColorSpace
const cubeGeo = new THREE.BoxGeometry(50, 50, 50)
const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xfeb74c, map: map })

// grid

const gridHelper = new THREE.GridHelper(1000, 20)
scene.add(gridHelper)

//

const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

const geometry = new THREE.PlaneGeometry(1000, 1000)
geometry.rotateX(-Math.PI / 2)

const plane = new THREE.Mesh(
  geometry,
  new THREE.MeshBasicMaterial({
    // visible: false
  })
)

scene.add(plane)

objects.push(plane)

// lights

const ambientLight = new THREE.AmbientLight(0x606060, 3)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 3)
directionalLight.position.set(1, 0.75, 0.5).normalize()
scene.add(directionalLight)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

render()

document.addEventListener('pointermove', onPointerMove)
document.addEventListener('pointerdown', onPointerDown)
document.addEventListener('keydown', onDocumentKeyDown)
document.addEventListener('keyup', onDocumentKeyUp)

//

window.addEventListener('resize', onWindowResize)

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  renderer.setSize(window.innerWidth, window.innerHeight)

  render()
}

function onPointerMove(event) {
  pointer.set(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  )

  raycaster.setFromCamera(pointer, camera)

  const intersects = raycaster.intersectObjects(objects, false)

  if (intersects.length > 0) {
    const intersect = intersects[0]
    // console.log('rollOverMesh.position 1: ', rollOverMesh.position)
    rollOverMesh.position.copy(intersect.point)
    // console.log('rollOverMesh.position 2: ', rollOverMesh.position)
    // console.log('intersect.face.normal: ', intersect.face.normal)
    rollOverMesh.position.add(intersect.face.normal)
    // console.log('rollOverMesh.position 3: ', rollOverMesh.position)
    rollOverMesh.position.divideScalar(50)
    // console.log('rollOverMesh.position 4: ', rollOverMesh.position)
    rollOverMesh.position.floor()
    // console.log('rollOverMesh.position 5: ', rollOverMesh.position)
    rollOverMesh.position.multiplyScalar(50)
    // console.log('rollOverMesh.position 6: ', rollOverMesh.position)
    rollOverMesh.position.addScalar(25)
    // console.log('rollOverMesh.position 7: ', rollOverMesh.position)

    render()
  }
}

function onPointerDown(event) {
  pointer.set(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  )

  raycaster.setFromCamera(pointer, camera)

  const intersects = raycaster.intersectObjects(objects, false)

  if (intersects.length > 0) {
    const intersect = intersects[0]

    // delete cube

    if (isShiftDown) {
      if (intersect.object !== plane) {
        scene.remove(intersect.object)

        objects.splice(objects.indexOf(intersect.object), 1)
      }

      // create cube
    } else {
      const voxel = new THREE.Mesh(cubeGeo, cubeMaterial)
      voxel.position.copy(intersect.point).add(intersect.face.normal)
      voxel.position.divideScalar(50).floor().multiplyScalar(50).addScalar(25)
      scene.add(voxel)

      objects.push(voxel)
    }

    render()
  }
}

function onDocumentKeyDown(event) {
  switch (event.keyCode) {
    case 17:
      isShiftDown = true
      break
  }
}

function onDocumentKeyUp(event) {
  switch (event.keyCode) {
    case 17:
      isShiftDown = false
      break
  }
}

function render() {
  renderer.render(scene, camera)
}
