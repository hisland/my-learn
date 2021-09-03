const buf = new ArrayBuffer(8)
console.log(buf)

const aa1 = new Uint8Array(buf)
console.log('Uint8Array', aa1)

aa1[0] = 33
console.log('Uint8Array', aa1)

const aa2 = new Int8Array(buf)
console.log('Int8Array', aa2)

aa2[0] = -1
console.log('Int8Array', aa2)

console.log('Uint8Array 同一段内存值变化了', aa1)
