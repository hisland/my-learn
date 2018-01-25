'use strict';

var list = [1, 2, 'a', 'b']

var rs1 = list.every(function(value, key, orgList) {
  console.log(value, key, orgList)
  return true;
})

console.log('rs1: ', rs1)
console.log('这个相当于 forEach, 所有跑一遍, 结果是 true')

var rs2 = list.every(function(value, key, orgList) {
  console.log(value, key, orgList)
  return value === 2
})

console.log('rs2: ', rs2)
console.log('每一个都要求 truthy 值, 遇到一个不是即停止并返回 false')
