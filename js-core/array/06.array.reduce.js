'use strict';

var list = [1, 2, 'a', 'b']

var rs1 = list.reduce(function(accumulator, value, index, orgList) {
  console.log(accumulator, value, index)
})

console.log('rs1: ', rs1)
console.log('iterator每次的返回值作为下一次的 accumulator')

var rs2 = list.reduce(function(accumulator, value, index, orgList) {
  console.log(accumulator, value, index)
}, 'init')

console.log('rs2: ', rs2)
console.log('指定了初始 init, 则从这个开始, 否则如上页的示例: 把每一个作为 accumulator, 从第2个开始累加')
