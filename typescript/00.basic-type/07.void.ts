function god0(): void {
  console.log(3)
  // 函数默认就是返回的 undefined
}

function god1(): void {
  console.log(3)
  return undefined // 明确返回 undefined
}
let aa1 = god1()
console.log(aa1)

{
  let aa2: void
  // aa2 = null // 正常可以这样, 开启 --strictNullChecks 则不行
  aa2 = undefined // 始终可以接收 undefined
}

function god3(): void {
  console.log(3)
  let kk = 3
  if (kk < 3) {
    return kk // 条件判断里面, 要么不返回, 要么返回 undefined
  }
}

let aa3 = god3()
console.log(aa3)

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
  let foo_13: unknown[] = []

  let foo1: void = undefined

  // 其它类型 -> void
  foo1 = foo_01
  foo1 = foo_02
  foo1 = foo_03
  foo1 = foo_04
  foo1 = foo_05 // undefined 可以赋值给 void
  foo1 = foo_06 // void 可以赋值给 void
  foo1 = foo_07
  foo1 = foo_08
  foo1 = foo_09
  foo1 = foo_10 // any 可以赋值给 void
  foo1 = foo_11
  foo1 = foo_12 // never 可以赋值给 void
  foo1 = foo_13
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
  let foo_13: unknown[] = []

  let foo1: void = undefined

  // 其它类型 -> void
  foo_01 = foo1
  foo_02 = foo1
  foo_03 = foo1
  foo_04 = foo1
  foo_05 = foo1
  foo_06 = foo1 // void 可以赋值给 void
  foo_07 = foo1
  foo_08 = foo1
  foo_09 = foo1
  foo_10 = foo1 // void 可以赋值给 any
  foo_11 = foo1 // void 可以赋值给 unknown
  foo_12 = foo1
  foo_13 = foo1
}

export const preventVSCodeError = 1
