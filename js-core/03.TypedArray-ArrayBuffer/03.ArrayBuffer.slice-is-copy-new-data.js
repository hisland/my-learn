const buf1 = new ArrayBuffer(8)
console.log(buf1)

const aa1 = new Uint8Array(buf1)
console.log('aa1: ', aa1)

aa1.fill(10)
console.log('aa1: ', aa1)

const buf2 = buf1.slice(0, 4)
console.log('buf2: ', buf2)


aa1.fill(20)
console.log('aa1: ', aa1)
console.log('buf2: ', buf2)
