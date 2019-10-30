'use strict'

const tt = { some: 1 }

const pp = new Proxy(tt, {
  set: function(target, name, value, receiver) {
    console.log(receiver)
    console.log('bb: ', receiver === bb)
    console.log('pp: ', receiver === pp)
    console.log('tt: ', receiver === tt)
    console.log('-----')
    return true
  },
})

const bb = Object.create(pp)

bb.aa = 1
pp.aa = 1
