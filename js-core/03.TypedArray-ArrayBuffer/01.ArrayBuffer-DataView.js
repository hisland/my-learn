const buf = new ArrayBuffer(8)
console.log(buf)

const view1 = new DataView(buf)
view1.getUint8(0)
console.log(view1)
