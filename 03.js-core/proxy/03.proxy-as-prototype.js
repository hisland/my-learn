'use strict'

var tt = {}

var pp = new Proxy(tt, {
  get: function(target, name, receiver){
    return 33
  }
})

var bb = Object.create(pp)

console.log(bb.aa)
console.log(bb.cc)
console.log(bb.dd)
console.log(bb.ee)


