import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js'
import { TransformControls } from 'three/addons/controls/TransformControls.js'
import Stats from 'three/addons/libs/stats.module.js'

const getWindowSizeInfo = () => {
  const width = Math.floor(window.innerWidth)
  const height = Math.floor(window.innerHeight)
  const obj = {
    width,
    height,
    aspect: width / height,
  }

  return obj
}

// 创建场景、摄像机和渲染器
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xffffff)
const windowSizeInfo = getWindowSizeInfo()
const camera = new THREE.PerspectiveCamera(24, windowSizeInfo.aspect, 1, 50000)
// const camera = new THREE.OrthographicCamera(
//   30000 / -2,
//   30000 / 2,
//   30000 / 2,
//   30000 / -2,
//   0.1,
//   100000
// )
const renderer = new THREE.WebGLRenderer({
  antialias: true, // true/false表示是否开启反锯齿
  alpha: true, // true/false 表示是否可以设置背景色透明
  precision: 'highp', // highp/mediump/lowp 表示着色精度选择
  premultipliedAlpha: true, // true/false 表示是否可以设置像素深度（用来度量图像的分辨率）
  preserveDrawingBuffer: true, // true/false 表示是否保存绘图缓冲
  stencil: false, // false/true 表示是否使用模板字体或图案
})
renderer.setSize(windowSizeInfo.width, windowSizeInfo.height)
document.body.appendChild(renderer.domElement)

const stats = new Stats()
document.body.appendChild(stats.dom)

scene.add(new THREE.AxesHelper(1000))

// grid

// const gridHelper = new THREE.GridHelper()
// scene.add(gridHelper)

const controls = new OrbitControls(camera, renderer.domElement)
controls.minZoom = 0.5
controls.maxZoom = 2

// 将2个物体换成 2个fbx模型
const loader = new FBXLoader()
const box1 = await loader.loadAsync('../static/model/bottom.fbx')
console.log('box1: ', box1)
box1.position.set(-400, -600, 0)

// box1.children[0].material = new THREE.MeshPhongMaterial({
//   // 一种非光泽表面的材质，没有镜面高光
//   color: 0xffffff,
// })
// box1.children[1].material = new THREE.MeshPhongMaterial({
//   // 一种非光泽表面的材质，没有镜面高光
//   color: 0xff00ff,
// })
// box1.children[2].material = new THREE.MeshPhongMaterial({
//   // 一种非光泽表面的材质，没有镜面高光
//   color: 0xffff00,
// })
scene.add(box1)

const directionalLight = new THREE.DirectionalLight(0xff0000, 0.4)
directionalLight.position.set(0, 1000, -1000)
// directionalLight.mapSize = 1024;
// directionalLight.boxSize = 4096;
scene.add(directionalLight)
const dirLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1, 0xff0000)
scene.add(dirLightHelper)

const directionalLight1 = new THREE.DirectionalLight(0x00ff00, 1)
directionalLight1.position.set(1, 1000, 1000)
scene.add(directionalLight1)
const dirLightHelper1 = new THREE.DirectionalLightHelper(directionalLight1, 1, 0x00ff00)
scene.add(dirLightHelper1)

// const directionalLight2 = new THREE.DirectionalLight(0x0000ff, 1)
// directionalLight2.position.set(1, 100, 1)
// scene.add(directionalLight2)
// const dirLightHelper2 = new THREE.DirectionalLightHelper(directionalLight2, 1, 0x00ff00)
// scene.add(dirLightHelper2)

// camera.position.x = 5000
// camera.position.y = 2000
// camera.position.z = 10000
camera.position.set(-5316, 3551, 4563)
camera.lookAt(scene.position)

const uniform = {
  u_color: { value: new THREE.Color('#fff') },
  u_r: { value: 2.2 },
  u_ring: {
    value: 1.8,
  },
}
const vs = `varying vec3 vPosition;
    void main(){
    vPosition = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `
const fs = `
  varying vec3 vPosition;
  uniform vec3 u_color;
  uniform float u_r;
  uniform float u_ring;

  void main(){
          float pct=distance(vec2(vPosition.x,vPosition.y),vec2(0.0));
          if(pct>u_r || pct<(u_r-u_ring)){
              gl_FragColor = vec4(1.0,0.0,0.0,0);
          }else{
              float dis=(pct-(u_r-u_ring))/(u_r-u_ring);
              gl_FragColor = vec4(u_color,dis);
          }
      }
  `
const geometry = new THREE.CircleGeometry(600, 600)
const ShaderMaterial = new THREE.ShaderMaterial({
  vertexShader: vs,
  fragmentShader: fs,
  side: THREE.DoubleSide,
  uniforms: uniform,
  transparent: true,
  depthWrite: false,
})
const circle = new THREE.Mesh(geometry, ShaderMaterial)
circle.position.set(0, -450, 0)
circle.scale.set(200, 200, 200)
circle.rotation.x = -0.5 * Math.PI
scene.add(circle)

const clock = new THREE.Clock()
const renderT = 1 / 60
let timeS = 0

// 动画函数
function animate() {
  const dt = clock.getDelta()
  timeS += dt
  if (timeS <= renderT) {
    return
  } else {
    timeS = 0
  }
  stats.update()

  if (ShaderMaterial) {
    ShaderMaterial.uniforms.u_r.value += 1 || 0.5
    if (ShaderMaterial.uniforms.u_r.value >= 76) {
      ShaderMaterial.uniforms.u_r.value = 1
    }
  }

  renderer.render(scene, camera)
}
renderer.setAnimationLoop(animate)

// 调整窗口大小
window.addEventListener('resize', () => {
  const windowSizeInfo = getWindowSizeInfo()
  camera.aspect = windowSizeInfo.aspect
  camera.updateProjectionMatrix()
  renderer.setSize(windowSizeInfo.width, windowSizeInfo.height)
})
