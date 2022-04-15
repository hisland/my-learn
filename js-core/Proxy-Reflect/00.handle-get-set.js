'use strict'

const tt = { foo: 1 }

const pp = new Proxy(tt, {
  get: function (target, name, receiver) {
    console.log('--- 1 newTarget is pp: ', pp === receiver)
    console.log('get', target, name, 'arguments.length: ' + arguments.length)
    return 'some'
  },
  set: function (target, name, value, receiver) {
    console.log('--- 2 newTarget is pp: ', pp === receiver)
    console.log(
      'set',
      target,
      name,
      value,
      'arguments.length: ' + arguments.length
    )
    return true
  },
})

pp.aa = 3

console.log(pp.aa)
