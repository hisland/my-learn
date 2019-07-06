'use strict';

var list = [1, 2, 'a', 'b']

var rs1 = list.filter(function(value, key, orgList) {
  console.log(value, key, orgList)
})

console.log('rs1: ', rs1)
console.log('这个相当于 forEach, 所有跑一遍, 结果是空数组')

var rs2 = list.filter(function(value, key, orgList) {
  console.log(value, key, orgList)
  return value === 2
})

console.log('rs2: ', rs2)
console.log('返回 返回值为 truthy 的那个 value 的数组, 所有跑一遍')
