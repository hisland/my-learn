'use strict'

const tt = {}

const pp = new Proxy(tt, {
  get: function(target, name, receiver) {
    return 33
  },
})

console.log(pp.aa) // 全部被 get 处理
console.log(pp.bb) // 全部被 get 处理
console.log(pp.cc) // 全部被 get 处理
console.log(pp.dd) // 全部被 get 处理
