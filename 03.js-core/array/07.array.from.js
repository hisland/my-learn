'use strict'

const rs1 = Array.from('foo')
console.log(rs1, '根据 array-like, 循环生成新数组')

const rs2 = Array.from('foo', function(value, index) {
  console.log(arguments)
  return value + index
})
console.log(rs2, '使用 mapFn')

const rs3 = Array.from({ a: 1, b: 2 }, function(value, index) {
  console.log(arguments)
  return value
})
console.log(rs3, '不是 array-like, 返回空数组')
