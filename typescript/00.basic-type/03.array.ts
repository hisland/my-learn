{
  let list: number[] = []
  list.push(1)
  list.push(2)
  list.push(3)
  console.log(list)
}

{
  // 元素类型后面接上[]
  let list: number[] = []
  list = [4, 5, 6, 7, 8]
  console.log(list)
  // list.push('aa') // Error 数组里面只能放相同类型
}
{
  // 数组泛型 generic array, 工具提示还是 number[], 也许是等价的
  let list: Array<number> = []
  list = [4, 5, 6]
  console.log(list)
  // list.push('aa') // Error 数组里面只能放相同类型
}

{
  type T1 = number[] // number[]
  type KEYS = keyof T1 // 有很多属性, 不知道 number 是什么
  type T2 = T1[number] // number
  type T3 = T1[123] // number, 随意数字也能达到 number 的效果
}

{
  type T1 = string[] // string[]
  type KEYS = keyof T1 // 有很多属性, 不知道 number 是什么
  type T2 = T1[number] // string
  type T3 = T1[123] // string, 随意数字也能达到 number 的效果
}

{
  // 跟上面一样
  type T1 = Array<string>
  type KEYS = keyof T1
  type T2 = T1[number]
  type T3 = T1[123]
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

  let foo1: string[] = []

  // 其它类型 -> Array
  foo1 = foo_01
  foo1 = foo_02
  foo1 = foo_03
  foo1 = foo_04
  foo1 = foo_05
  foo1 = foo_06
  foo1 = foo_07
  foo1 = foo_08
  foo1 = foo_09
  foo1 = foo_10 // any 可以赋值给 Array
  foo1 = foo_11
  foo1 = foo_12 // never 可以赋值给 Array
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

  let foo1: string[] = []

  // Array -> 其它类型
  foo_01 = foo1
  foo_02 = foo1
  foo_03 = foo1
  foo_04 = foo1
  foo_05 = foo1
  foo_06 = foo1
  foo_07 = foo1
  foo_08 = foo1 // Array 可以赋值给 object
  foo_09 = foo1
  foo_10 = foo1 // Array 可以赋值给 any
  foo_11 = foo1 // Array 可以赋值给 unknown
  foo_12 = foo1
}

export const preventVSCodeError = 1
