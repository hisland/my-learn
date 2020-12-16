const xx = 3
console.log('x is ', xx)
delete xx // 语法错误
console.log('x is ', xx)
const oo = Object.create(null, {
  xx: {
    value: 1,
    configurable: true,
  },
})
console.log('o.x is ', oo.xx)
delete oo.xx // 删除成功
console.log('o.x is ', oo.xx)
