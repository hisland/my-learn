// 引入 Three.js
import * as THREE from 'three'

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 创建星星
const starsCount = 300 // 星星数量
const stars: THREE.Mesh[] = []

for (let ii = 0; ii < starsCount; ii++) {
  const starGeometry = new THREE.SphereGeometry(0.5, 8, 8)
  const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(starGeometry, starMaterial)

  // 随机生成星星位置
  star.position.x = (Math.random() - 0.5) * 2000
  star.position.y = (Math.random() - 0.5) * 2000
  star.position.z = -Math.random() * 1000
  console.log('star: ', star.position)

  scene.add(star)
  stars.push(star)
}

const geometry = new THREE.SphereGeometry(0.05, 8, 8)
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  // side: THREE.DoubleSide,
  // side: THREE.FrontSide,
  // side: THREE.BackSide
  // wireframe: true,
})
const box = new THREE.Mesh(geometry, material)
box.position.x = 0
box.position.y = 0
box.position.z = 0
scene.add(box)
console.log('box: ', box.position)

// 设置摄像机位置
camera.position.z = 5

// 动画函数
function animate() {
  requestAnimationFrame(animate)
  console.log(1)

  // 移动星星
  stars.forEach((star) => {
    star.position.z += 0.5 // 控制星星的速度

    // 当星星超出视野时重置位置
    if (star.position.z > camera.position.z) {
      star.position.z = -Math.random() * 1000
      star.position.x = (Math.random() - 0.5) * 2000
      star.position.y = (Math.random() - 0.5) * 2000
    }
  })

  renderer.render(scene, camera)
}

// 调整窗口大小
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

// 开始动画
animate()
