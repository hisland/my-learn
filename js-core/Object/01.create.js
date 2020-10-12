'use strict'
// Object.create(proto[, propertiesObject])

{
  // create an object with null as prototype
  // 这个纯对象没有 toString 等基本方法
  const oo1 = Object.create(null)
}

{
  // 对象字面量
  const oo1 = {}
  // 相当于下面这样:
  const oo2 = Object.create(Object.prototype)
}

let pp = {
  a: 1,
  b: 2,
  c: 'god',
}

let aa = Object.create(pp)
console.log('aa.a: ', aa.a)
console.log('aa.b: ', aa.b)
console.log('aa.c: ', aa.c)
console.log('aa.__proto__ === p: ', aa.__proto__ === pp)

let bb = Object.create(pp, {
  god: {
    value: 333,
    writable: true,
  },
})
console.log(bb.god)
bb.god = 4
console.log(bb.god)
