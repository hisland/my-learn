interface Hello {
  foo: string
  bar: string
}

{
  let foo: any = {}
  const obj: Hello = foo // any 与任何类型兼容, 但是实际效果缺少 foo, bar 属性
  console.log(obj)
}

{
  let foo: any = {}
  foo.foo = 'yes'
  foo.bar = 'god'
  const obj1: Hello = foo // any 与任何类型兼容, 并且后面把属性补上了, 不过通常不要这样用
  console.log(obj1)

  const obj2 = <Hello>foo // 强制转换, 与下面差不多
  console.log(obj2)
}

{
  const obj = <Hello>{} // 将对象字面量 强制转换成 Hello, 后面把属性补上 ok
  obj.foo = 'yes'
  obj.bar = 'god'
  console.log(obj)
}

{
  const obj: Hello = {} // 对象字面量没有初始化完全不行, 即使后面把属性补上也不行
  obj.foo = 'yes'
  obj.bar = 'god'
  console.log(obj)
}

export const preventVSCodeError = 1
