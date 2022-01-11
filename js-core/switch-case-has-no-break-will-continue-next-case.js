'use strict'

// f1(4) // 4 3 2 1
// f1(3) // 3 2 1
f1(0) // 0

f2(true) // true
// f2(false) // false
// f2('other') // other
// f2('none') // switch 没有匹配

function f1(aa) {
  console.log(
    '遇到第一个case符合条件便会开始执行, 上往下一直走,直到遇到break或者结尾, 不再管中间的case.'
  )
  switch (aa) {
    case 4:
      console.log(4)
    case 3:
      console.log(3)
    case 2:
      console.log(2)
    case 1:
      console.log(1)
      break
    case 0:
      console.log(0)
  }
}

function f2(aa) {
  console.log('有 break, 执行完遇到break便跳出switch')
  switch (aa) {
    case true:
      console.log('is true')
      break
    case false:
      console.log('is false')
      break
    case 'other':
      console.log('other')
      break
  }
}
