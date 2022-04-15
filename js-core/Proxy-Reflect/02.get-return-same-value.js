'use strict'

const tt = {}

const pp = new Proxy(tt, {
  get: function (target, name, receiver) {
    return 33
  },
})

console.log(pp.aa) // get 返回相同值
console.log(pp.bb) // get 返回相同值
console.log(pp.cc) // get 返回相同值
console.log(pp.dd) // get 返回相同值
