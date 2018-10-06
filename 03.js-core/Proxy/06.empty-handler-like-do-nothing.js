'use strict'

var tt = {}

var pp = new Proxy(tt, {})

pp.aa = 3
console.log(pp.aa)
pp.bb = 'xx'
console.log(pp.bb)

console.log('pp: ', pp)
console.log('tt: ', tt)
