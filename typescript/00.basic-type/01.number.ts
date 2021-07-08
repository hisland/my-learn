{
  let height: number = 6 // decimal
  console.log(height)
}
{
  let height: number = 32_12_44 // decimal 下划线分隔
  console.log(height)
}
{
  let height: number = 0x6ab // hex
  console.log(height)
}
{
  let height: number = 0x6a_ab // hex 下划线分隔
  console.log(height)
}
{
  let height: number = 0b1010 // binary
  console.log(height)
}
{
  let height: number = 0o6 // octal
  console.log(height)
}
{
  let height = 123 // 自动推导 number
  console.log(height)
}

{
  const height1 = 123 // 自动推导 123 数字面量类型
  const height2 = 456 // 自动推导 456 数字面量类型
  console.log(height1)
  console.log(height2)
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

  let foo1: number = 789

  // 其它类型 -> number
  foo1 = foo_01 // number 可以赋值给 number
  foo1 = foo_02
  foo1 = foo_03
  foo1 = foo_04
  foo1 = foo_05
  foo1 = foo_06
  foo1 = foo_07
  foo1 = foo_08
  foo1 = foo_09
  foo1 = foo_10 // any 可以赋值给 number
  foo1 = foo_11
  foo1 = foo_12 // never 可以赋值给 number
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

  let foo1: number = 789

  // number -> 其它类型
  foo_01 = foo1 // number 可以赋值给 number
  foo_02 = foo1
  foo_03 = foo1
  foo_04 = foo1
  foo_05 = foo1
  foo_06 = foo1
  foo_07 = foo1
  foo_08 = foo1
  foo_09 = foo1
  foo_10 = foo1 // number 可以赋值给 any
  foo_11 = foo1 // number 可以赋值给 unknown
  foo_12 = foo1
}

export const preventVSCodeError = 1
