const ab = new ArrayBuffer(6)
console.log(ArrayBuffer.isView(ab))

const u8 = new Uint8ClampedArray(ab)
console.log(ArrayBuffer.isView(u8))