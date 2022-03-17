'use strict'

class Halo {
  foo = 'foo'
  bar = 'bar'
}

console.log('obj', Object({ aa: 1, bb: 2 }))
console.log('empty obj', Object({}))
console.log('array', Object(['a', 'b']))
console.log('empty array', Object([]))
console.log(
  'arrow-fn',
  Object(() => {})
)
console.log('Symbol', Object(Symbol('halo')))
console.log('Symbol.asyncIterator', Object(Symbol.asyncIterator))

console.log('class', Object(Halo))
console.log('class instance', Object(new Halo()))
console.log('regex', Object(/reg/))

console.log('number', Object(1)) // 转换成对象
console.log('string', Object('yes')) // 转换成对象

try {
  console.log('null', Object(null)) // 返回空对象, 不会报错
  console.log('undefined', Object(undefined)) // 返回空对象, 不会报错
} catch (error) {
  console.log('null, undefined 报错')
}
