'use strict'
const xx = 3
console.log('xx is ', xx)
delete xx // 语法错误
console.log('xx is ', xx)
const oo = Object.create(null, {
  xx: {
    value: 1,
    configurable: true,
  },
})
delete oo.xx // 删除成功
