const ab = new ArrayBuffer(6)
console.log(ab)

const u8 = new Uint8ClampedArray(ab)
console.log(u8)

u8[0] = 123
u8[4] = 9999
console.log(u8)