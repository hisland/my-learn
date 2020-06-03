let aa1: undefined = undefined
// let aa2: undefined = null // 开启 --strictNullChecks 不能这样赋值

let aa3: void = undefined

let aa4: undefined = god0()
console.log(aa4)

function god0(): void {
  console.log(3)
  // 函数默认就是返回的 undefined
}

{
  let foo_01 = 123
  let foo_02 = 'abc'
  let foo_03 = true
  let foo_04: null = null
  let foo_05: undefined = undefined
  let foo_06: void = undefined
  let foo_07 = Symbol()
  let foo_08: object = { yes: 1 }
  let foo_09: Function = () => {}
  let foo_10: any = 'any'
  let foo_11: unknown = 'some'
  let foo_12: never = 'abc' as never

  let foo1: undefined = undefined

  // 其它类型 -> undefined
  foo1 = foo_01
  foo1 = foo_02
  foo1 = foo_03
  foo1 = foo_04
  foo1 = foo_05 // undefined 可以赋值给 undefined
  foo1 = foo_06
  foo1 = foo_07
  foo1 = foo_08
  foo1 = foo_09
  foo1 = foo_10 // any 可以赋值给 undefined
  foo1 = foo_11
  foo1 = foo_12 // never 可以赋值给 undefined
}
{
  let foo_01 = 123
  let foo_02 = 'abc'
  let foo_03 = true
  let foo_04: null = null
  let foo_05: undefined = undefined
  let foo_06: void = undefined
  let foo_07 = Symbol()
  let foo_08: object = { yes: 1 }
  let foo_09: Function = () => {}
  let foo_10: any = 'any'
  let foo_11: unknown = 'some'
  let foo_12: never = 'abc' as never

  let foo1: undefined = undefined

  // 其它类型 -> undefined
  foo_01 = foo1
  foo_02 = foo1
  foo_03 = foo1
  foo_04 = foo1
  foo_05 = foo1 // undefined 可以赋值给 undefined
  foo_06 = foo1 // undefined 可以赋值给 void
  foo_07 = foo1
  foo_08 = foo1
  foo_09 = foo1
  foo_10 = foo1 // undefined 可以赋值给 any
  foo_11 = foo1 // undefined 可以赋值给 unknown
  foo_12 = foo1
}

export const preventVSCodeError = 1
