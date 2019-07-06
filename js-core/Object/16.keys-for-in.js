'use strict'

let pp = {
  god: 'ccc',
}

let cc = Object.create(pp)
cc.test = 123

console.log('keys only own props', Object.keys(cc))

console.log('-----------------------')
console.log('for in has parent props')
for (let ii in cc) {
  console.log(
    'has prop: ',
    ii,
    '       c.hasOwnProperty: ',
    cc.hasOwnProperty(ii)
  )
}
