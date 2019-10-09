'use strict'

const tt = { some: 1, cc: 'org cc' }

const pp = new Proxy(tt, {
  get: function(target, name, receiver) {
    console.log(receiver.cc)
    console.log('bb: ', receiver === bb)
    console.log('pp: ', receiver === pp)
    console.log('tt: ', receiver === tt)
    console.log('-----')
    return true
  },
})

const bb = Object.create(pp)

bb.cc = 'cc'

console.log(bb.aa)
// console.log(pp.aa) // 此时 receiver 是 pp, 会导致无限递归
