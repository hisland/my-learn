'use strict'

let list = [1, 2, 'a', 'b']

let rs1 = list.find(function(value, key, orgList) {
  console.log(value, key, orgList)
})

console.log('rs1: ', rs1)
console.log('这个相当于 forEach, 所有跑一遍, 没有结果')

let rs2 = list.find(function(value, key, orgList) {
  console.log(value, key, orgList)
  return value === 2
})

console.log('rs2: ', rs2)
console.log('返回 返回值为 truthy 的那个 value, 找到即退出循环')
