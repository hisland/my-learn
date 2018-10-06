'use strict'

// 普通对象示例
// const aa = { some: 'on a' }
// const bb = Object.create(aa)
//
// console.log(aa.some)
// console.log(bb.some) // 追溯到 aa.some
//
// console.log(' ---------- ')
//
// bb.some = 'on b'
// console.log(aa.some)
// console.log(bb.some) // 自己的 some


// 普通对象示例
const aa = { some: 'on a' }
const proxy = new Proxy(aa, {
  set: function(obj, prop, value, receiver) {
    obj[prop] = value
  },
})
const myObj = Object.create(proxy)

console.log(aa.some)
console.log(myObj.some)

console.log(' ---------- ')

myObj.some = 'on b' // 报错
console.log(aa.some)
console.log(myObj.some)
