// 就像普通js声明的变量一样随便赋值, 不会报错
{
  let aa: any = 4
  console.log('ok: ', aa)
  aa = 'god'
  console.log('ok: ', aa)
  aa = true
  console.log('ok: ', aa)
}

{
  // 不指定类型, 类型是 类型推断
  // 查看 http://www.typescriptlang.org/Handbook#type-inference
  let aa = 3 // 不是any类型, 类型推断 出 number
  console.log(aa)
  // aa = 'god'; // 这里编译报错, 但是能生成js
  // console.log(aa);
}

{
  let list: any[] = [1, 'god', true, 'cc']
  console.log(list)
  list[1] = 1000
  console.log(list)
}

{
  // any 和  Object 不一样
  {
    let bb: any = 4
    console.log(bb.toFixed(2)) // ok
  }
  {
    let bb: Object = 4
    console.log(bb.toFixed(2)) // error
  }
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

  let foo1: any = 'some'

  // 其它类型 -> any
  foo1 = foo_01
  foo1 = foo_02
  foo1 = foo_03
  foo1 = foo_04
  foo1 = foo_05
  foo1 = foo_06
  foo1 = foo_07
  foo1 = foo_08
  foo1 = foo_09
  foo1 = foo_10
  foo1 = foo_11
  foo1 = foo_12 // never 可以赋值给 any, 这里不行是因为 foo_11 没有初始化
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

  let foo1: any = 'some'

  // 其它类型 -> any
  foo_01 = foo1
  foo_02 = foo1
  foo_03 = foo1
  foo_04 = foo1
  foo_05 = foo1
  foo_06 = foo1
  foo_07 = foo1
  foo_08 = foo1
  foo_09 = foo1
  foo_10 = foo1
  foo_11 = foo1
  foo_12 = foo1 // 只有 never 不行
  foo_13 = foo1
}

export const preventVSCodeError = 1
