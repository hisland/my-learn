'use strict'

const halo = ['d', 'e', 'f']

const pp = new Proxy(halo, {
  set: function (target, name, value, receiver) {
    console.log('set ', name, value)
    return Reflect.set(target, name, value, receiver)
  },
  get: function (target, name, receiver) {
    console.log('get ', name)
    // push / pop 本质是先读取属性
    // 这里要返回原始的操作, 不然 push/pop 不能正常运行
    return Reflect.get(target, name, receiver)
  },
})

console.log(1, '------')
pp[9] = 'k1'
pp[4] = 'k2'
pp['a'] = 'yes1'
pp['0'] = 'yes2'
console.log(halo)
console.log(halo.length, '并没有包含 a 这个key')
console.log(2, '------')
pp.pop()
console.log(halo)
console.log(halo.length)
