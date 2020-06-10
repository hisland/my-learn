// any thing that is not number, string, boolean, symbol, null, or undefined

let aa1: object = { a: 1 } // 注意是 小o, 不是大O
console.log(aa1)

{
  // 下面这些原始类型都不行, null | undefined 好像要开启 --strictNullChecks 才不行
  let aa1: object = 11
  let aa2: object = 'aa'
  let aa3: object = true
  let aa4: object = Symbol('what')
  let aa5: object = null // 开启 --strictNullChecks Error
  let aa6: object = undefined // 开启 --strictNullChecks Error
}

{
  // 除了原始值, 可以随意赋值给 object
  let aa1: object = { aa: 1 }
  aa1 = { bb: 2 }
  aa1 = [1, 2, 3]
}

{
  // object 不能赋值给原始值
  let aa1: object = { aa: 1 }
  let aa2: boolean = aa1
  let aa3: number = aa1
  let aa4: string = aa1
  let aa5: null = aa1
  let aa6: undefined = aa1
}

{
  interface Foo {
    name: string
  }
  let aa1: Foo = { name: 'hdl' }
  let aa2: object = aa1 // Foo -> object ok

  let aa3: object = { name: 'hdl' }
  let aa4: Foo = aa3 // object -> Foo no
}

{
  // {} 和 object 感觉像是一样的?
  let aa1: {} = { name: 'hdl' }
  let aa2: object = aa1 // {} -> object ok

  let aa3: object = { name: 'hdl' }
  let aa4: {} = aa3 // object -> {} no
}

{
  // {} 和 object 感觉像是一样的?
  let aa1: {} = {}
  let aa2: object = {}
  let aa3 = {}

  aa1 = aa2 // object -> {} ok
  aa2 = aa1 // {} -> object ok

  aa3 = aa2 // object -> {} ok
  aa2 = aa3 // {} -> object ok

  aa1 = aa3 // object -> {} ok
  aa3 = aa1 // {} -> object ok

  // 并不是通用对象, 而是没有属性的空对象的感觉
  aa1.foo = 3
  aa2.foo = 3
  aa3.foo = 3
}

{
  // [] 和 object
  let aa1: [] = []
  let aa2: object = {}

  aa1 = aa2 // object -> [] no
  aa2 = aa1 // [] -> object ok

  let aa3: object = ['hdl'] // 即使值是 [], 但是 aa3 声明是 object
  let aa4: [] = aa3
}

{
  let aa1: [] = []
  aa1.push(33) // 这里意思是 Array<never>
  aa1.push('str')
  aa1.push(33 as never)
  aa1.push('str' as never)

  let aa2: [] = []
  let aa3: Array<never> = []
  aa2 = aa3 // 但是显示指定的 Array<never>, 又不能赋值给 []
  aa3 = aa2
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

  let foo1: object = { yes: 2 }

  // 其它类型 -> object
  foo1 = foo_01
  foo1 = foo_02
  foo1 = foo_03
  foo1 = foo_04
  foo1 = foo_05
  foo1 = foo_06
  foo1 = foo_07
  foo1 = foo_08 // object 可以赋值给 object
  foo1 = foo_09 // Function 可以赋值给 object
  foo1 = foo_10 // any 可以赋值给 object
  foo1 = foo_11
  foo1 = foo_12 // never 可以赋值给 object
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

  let foo1: object = { yes: 2 }

  // 其它类型 -> unknown
  foo_01 = foo1
  foo_02 = foo1
  foo_03 = foo1
  foo_04 = foo1
  foo_05 = foo1
  foo_06 = foo1
  foo_07 = foo1
  foo_08 = foo1 // object 可以赋值给 object
  foo_09 = foo1
  foo_10 = foo1 // object 可以赋值给 any
  foo_11 = foo1 // object 可以赋值给 unknown
  foo_12 = foo1
  foo_13 = foo1
}

export const preventVSCodeError = 1
