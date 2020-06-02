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
  // [] 和 object 感觉像是一样的?
  let aa1: [] = []
  let aa2: object = aa1 // [] -> object ok

  let aa3: object = ['hdl']
  let aa4: [] = aa3 // object -> [] no
}

export const preventVSCodeError = 1
