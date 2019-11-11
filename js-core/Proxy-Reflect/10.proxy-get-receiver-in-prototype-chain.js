'use strict'

const orgObj = { some: 1, cc: 'org cc' }

const proxySelf = new Proxy(orgObj, {
  get: function(target, name, receiver) {
    console.log(receiver.cc)
    console.log('   target: ', orgObj === target)
    console.log('   orgObj: ', receiver === orgObj)
    console.log('proxySelf: ', receiver === proxySelf)
    console.log(' prosySub: ', receiver === prosySub)
    console.log()
    return true
  },
})

const prosySub = Object.create(proxySelf)

prosySub.cc = 'cc'
console.log(prosySub.aa)
// proxySelf.cc = 'cc'
// console.log(proxySelf.aa) // 此时 receiver 是 proxySelf, 会导致无限 get cc 属性
