'use strict'

const rs1 = Array.from('foo')
console.log(rs1, '根据 array-like, 循环生成新数组')

console.log('\n\n')
const rs2 = Array.from('foo', function(value, index) {
  console.log(value, index)
  return value + index
})
console.log(rs2, '使用 mapFn')

console.log('\n\n')
const rs3 = Array.from({ a: 1, b: 2 }, function(value, index) {
  console.log(value, index)
  return value
})
console.log(rs3, '不是 array-like, 返回空数组')
