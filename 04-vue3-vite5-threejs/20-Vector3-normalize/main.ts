import * as THREE from 'three'

const aa = new THREE.Vector3(5, 0, 0)
console.log('aa: ', aa)
const bb = aa.normalize()
console.log('bb: ', bb)
console.log('aa === bb: ', aa === bb)
