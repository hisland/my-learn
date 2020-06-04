// 函数对比 看参数, 看返回值
// 参数 一个一个对比类型兼容情况
// 返回值 对比类型兼容情况
{
  // 参数 不同
  // 返回值 相同
  type foo1 = (arg1: string) => string
  type foo2 = (arg1: number) => string

  {
    // "no"
    type T01 = foo1 extends foo2 ? 'yes' : 'no'
    let obj1: foo2 = {} as foo1
  }
  {
    // "no"
    type T01 = foo2 extends foo1 ? 'yes' : 'no'
    let obj1: foo1 = {} as foo2
  }
}

{
  // 参数 相同
  // 返回值 不同
  type foo1 = (arg1: string) => string
  type foo2 = (arg1: string) => number

  {
    // "yes" foo1 -> foo2
    type T01 = foo1 extends foo2 ? 'yes' : 'no'
    let obj1: foo2 = {} as foo1
  }
  {
    // "no"
    type T01 = foo2 extends foo1 ? 'yes' : 'no'
    let obj1: foo1 = {} as foo2
  }
}

{
  // 参数 兼容 相同位置
  // 返回值 相同
  type foo1 = (arg1: string) => void
  type foo2 = (arg1: string, arg2: number) => void

  {
    // "yes" foo1 -> foo2
    type T01 = foo1 extends foo2 ? 'yes' : 'no'
    let obj1: foo2 = {} as foo1
  }
  {
    // "no"
    type T01 = foo2 extends foo1 ? 'yes' : 'no'
    let obj1: foo1 = {} as foo2
  }
}

{
  // 参数 兼容 相同位置
  // 返回值 兼容
  type foo1 = (arg1: string) => number
  type foo2 = (arg1: string, arg2: number) => string | number

  {
    // "yes" foo1 -> foo2
    type T01 = foo1 extends foo2 ? 'yes' : 'no'
    let obj1: foo2 = {} as foo1
  }
  {
    // "no"
    type T01 = foo2 extends foo1 ? 'yes' : 'no'
    let obj1: foo1 = {} as foo2
  }
}
