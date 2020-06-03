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

  let foo1: never = 123 as never

  // 其它类型 -> never, 除了 never 自身 全部不行
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
  foo1 = foo_12 // never 可以赋值给 never
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

  let foo1: never = 123 as never

  // never -> 其它类型  全部ok
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
  foo_12 = foo1
}

// 返回never的函数必须存在无法达到的终点, throw 是一种方法
function error(message: string): never {
  throw new Error(message)
}

error('hey')

// 没有显示返回, 默认返回的是 undefined, 也不行
// 正常执行完毕不行
function bad(message: string): never {
  let aa = 99
  console.log(aa + 3)
}

bad('bbq')

// 返回never的函数必须存在无法达到的终点
// 无限循环
function infiniteLoop(): never {
  while (true) {}
}
