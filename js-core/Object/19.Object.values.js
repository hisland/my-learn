'use strict'

class Halo {
  foo = 'foo'
  bar = 'bar'
}

console.log('obj', Object.values({ aa: 1, bb: 2 }))
console.log('empty obj', Object.values({}))
console.log('array', Object.values(['a', 'b']))
console.log('empty array', Object.values([]))
console.log(
  'arrow-fn',
  Object.values(() => {})
)
console.log('Symbol', Object.values(Symbol('halo')))
console.log('Symbol.asyncIterator', Object.values(Symbol.asyncIterator))

console.log('class', Object.values(Halo))
console.log('class instance', Object.values(new Halo()))
console.log('regex', Object.values(/reg/))
console.log('number', Object.values(1))
console.log('string', Object.values('yes'))

try {
  console.log('null', Object.values(null))
  console.log('undefined', Object.values(undefined))
} catch (error) {
  console.log('null, undefined 报错')
}
