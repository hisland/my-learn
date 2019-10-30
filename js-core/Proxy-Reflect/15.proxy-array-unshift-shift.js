'use strict'

const halo = [1, 2, 3]

const pp = new Proxy(halo, {
  set: function(target, name, value, receiver) {
    console.log('set ', name, value)
    return Reflect.set(target, name, value, receiver)
  },
  get: function(target, name, receiver) {
    console.log('get ', name)
    // push / pop 本质是先读取属性
    // 这里要返回原始的操作, 不然 push/pop 不能正常运行
    return Reflect.get(target, name, receiver)
  },
})

console.log(1, '------')
pp.unshift('a')
console.log(2, '------')
pp.shift()
console.log(3, '------')
console.log(halo)
