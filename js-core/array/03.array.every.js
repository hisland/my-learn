'use strict'

let list = [1, 2, 'a', 'b']

let rs1 = list.every(function(value, key, orgList) {
  console.log(value, key, orgList)
  return true
})

console.log('rs1: ', rs1)
console.log('全 true, 相当于 forEach')

console.log('\n\n')

let rs2 = list.every(function(value, key, orgList) {
  console.log(value, key, orgList)
  return value === 2
})

console.log('rs2: ', rs2)
console.log('遇到 falsy 停止')
