// any thing that is not number, string, boolean, symbol, null, or undefined

let aa1: object = { a: 1 } // 注意是 小o, 不是大O
console.log(aa1)
{
  // 下面这些原始类型都不行, null | undefined 好像要开启 --strictNullChecks 才不行
  // let aa1: object = 11
  // let aa2: object = 'aa'
  // let aa3: object = true
  // let aa4: object = Symbol('what')
  // let aa5: object = null
  // let aa6: object = undefined
}
export const preventVSCodeError = 1
