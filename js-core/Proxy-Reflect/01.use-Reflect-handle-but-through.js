'use strict'

const tt = {}

const pp = new Proxy(tt, {
  get: function (target, name, receiver) {
    console.log('get 穿透之前干点啥')
    return Reflect.get(target, name, receiver) // Reflect 是穿透
  },
  set: function (target, name, value, receiver) {
    console.log('set 穿透之前干点啥')
    return Reflect.set(target, name, value, receiver) // Reflect 是穿透
  },
})

pp.aa = 3

console.log(pp.aa, tt)
