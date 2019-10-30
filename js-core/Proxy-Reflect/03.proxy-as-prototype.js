'use strict'

const tt = {}

const pp = new Proxy(tt, {
  get: function(target, name, receiver) {
    return 33
  },
})

const bb = Object.create(pp)

console.log(bb.aa) // 全部从原型链上读取, 遇到 Proxy, 返回 Proxy 返回的内容
console.log(bb.cc) // 全部从原型链上读取, 遇到 Proxy, 返回 Proxy 返回的内容
console.log(bb.dd) // 全部从原型链上读取, 遇到 Proxy, 返回 Proxy 返回的内容
console.log(bb.ee) // 全部从原型链上读取, 遇到 Proxy, 返回 Proxy 返回的内容
