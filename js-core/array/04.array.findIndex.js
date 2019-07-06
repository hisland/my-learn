'use strict'

let list = [1, 2, 'a', 'b']

let rs1 = list.findIndex(function(value, index, orgList) {
  console.log(value, index, orgList)
})

console.log('rs1: ', rs1)
console.log('这个相当于 forEach, 所有跑一遍, 没有结果返回-1')

console.log('\n\n')

let rs2 = list.findIndex(function(value, index, orgList) {
  console.log(value, index, orgList)
  return value === 2
})

console.log('rs2: ', rs2)
console.log('类似 find, 只是返回 index')
console.log('返回 返回值为truthy的那个 index, 找到即退出循环')
