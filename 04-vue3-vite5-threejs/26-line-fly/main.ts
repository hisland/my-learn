import * as THREE from 'three'

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 创建线条
const linesCount = 100 // 线条数量
const lines: THREE.Line[] = []

for (let ii = 0; ii < linesCount; ii++) {
  const points: THREE.Vector3[] = []
  points.push(new THREE.Vector3(0, 0, 0)) // 线条起始点
  points.push(new THREE.Vector3(0, 0, -(Math.random() - 0.2))) // 线条结束点

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff })
  const line = new THREE.Line(lineGeometry, lineMaterial)

  // 随机生成线条位置
  line.position.x = Math.random() > 0.5 ? 1 : -1 // X 轴位置
  line.position.y = (Math.random() - 0.5) * 2 // Y 轴位置
  line.position.z = Math.random() * -10 // Z 轴位置（在摄像机后面）

  scene.add(line)
  lines.push(line)
}

// 设置摄像机位置
camera.position.z = 0

// 动画函数
function animate() {
  requestAnimationFrame(animate)

  // 移动线条
  lines.forEach((line) => {
    line.position.z += 0.02 // 线条向前移动
    // line.position.x += line.position.x < 0 ? -0.005 : 0.005

    // 当线条超出视野时重置位置
    if (line.position.z > 0) {
      line.position.x = Math.random() > 0.5 ? 1 : -1 // X 轴位置
      line.position.y = (Math.random() - 0.5) * 2 // 随机 Y 轴位置
      line.position.z = Math.random() * -10 // 重新随机 Z 轴位置
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
