'use strict'

let list = [1, 2, 'a', 'b']

let rs1 = list.some(function(value, key, orgList) {
  console.log(value, key, orgList)
  return true
})

console.log('rs1: ', rs1)
console.log('遇到 truthy 便退出')

console.log('\n\n')

let rs2 = list.some(function(value, key, orgList) {
  console.log(value, key, orgList)
  return value === 2
})

console.log('rs2: ', rs2)
console.log('遇到 truthy 便退出')

console.log('\n\n')

let rs3 = list.some(function(value, key, orgList) {
  console.log(value, key, orgList)
  return false
})

console.log('rs3: ', rs3)
console.log('遇到 truthy 便退出')
console.log('全 false, 相当于 forEach')
