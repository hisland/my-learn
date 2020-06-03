{
  let halo: string = 'he'
  console.log(halo)
}
{
  let halo: string = 'dl'
  console.log(halo)
}
{
  let halo = 'dl' // 自动推导 string, 因为 let 可以修改值
  console.log(halo)
}
{
  const halo = 'dl' // const 自动推导, 字面量类型 'dl', 因为 const 不可改
  let halo2 = halo // 字面量类型 赋值给 string  类型兼容
  console.log(halo)
}
{
  let halo: 'dl' = 'dl' // 字面量类型 'dl'
  halo = 'some' // string 赋值给 字面量类型  不兼容
  console.log(halo)
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

  let foo1: string = 'xyz'

  // 其它类型 -> string
  foo1 = foo_01
  foo1 = foo_02 // string 可以赋值给 string
  foo1 = foo_03
  foo1 = foo_04
  foo1 = foo_05
  foo1 = foo_06
  foo1 = foo_07
  foo1 = foo_08
  foo1 = foo_09
  foo1 = foo_10 // any 可以赋值给 string
  foo1 = foo_11
  foo1 = foo_12 // never 可以赋值给 string
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

  let foo1: string = 'xyz'

  // 其它类型 -> string
  foo_01 = foo1
  foo_02 = foo1 // string 可以赋值给 string
  foo_03 = foo1
  foo_04 = foo1
  foo_05 = foo1
  foo_06 = foo1
  foo_07 = foo1
  foo_08 = foo1
  foo_09 = foo1
  foo_10 = foo1 // string 可以赋值给 any
  foo_11 = foo1 // string 可以赋值给 unknown
  foo_12 = foo1
}

export const preventVSCodeError = 1
