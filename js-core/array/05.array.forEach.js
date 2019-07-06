'use strict'

let list = [1, 2, 'a', 'b']

let rs1 = list.forEach(function(value, index, orgList) {
  console.log(value, index, orgList)
})

console.log('rs1: ', rs1)
console.log('相当于 for-of, 所有跑一遍, 没有结果')

let rs2 = list.forEach(function(value, index, orgList) {
  console.log(value, index, orgList)
  return value === 2
})

console.log('rs2: ', rs2)
console.log('不管 iterator 的返回值')
