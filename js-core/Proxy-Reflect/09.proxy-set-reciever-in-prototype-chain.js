'use strict'

const orgObj = { some: 1 }

const proxySelf = new Proxy(orgObj, {
  set: function(target, name, value, receiver) {
    console.log('   target: ', orgObj === target)
    console.log('   orgObj: ', receiver === orgObj)
    console.log('proxySelf: ', receiver === proxySelf)
    console.log(' prosySub: ', receiver === prosySub)
    console.log()
    return true
  },
})

const prosySub = Object.create(proxySelf)

proxySelf.aa = 1
prosySub.aa = 1
