'use strict'

const tt = {}

const pp = new Proxy(tt, {
  get: function(target, name, receiver) {
    return Reflect.get(target, name, receiver) // Reflect 相当于 穿透
  },
  set: function(target, name, value, receiver) {
    return Reflect.set(target, name, value, receiver) // Reflect 相当于 穿透
  },
})

pp.aa = 3

console.log(pp.aa, tt)
