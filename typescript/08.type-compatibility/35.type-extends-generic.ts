// 泛型相当于一个函数, 具体类型相当于实例化, 需要装具体类型参数传入
// 兼容性实际上就是属性一个一个对比, 同名属性对比属性类型, 递归下去
{
  // any 与其它类型可以相互赋值
  interface IF1<T> {
    name: T
  }

  {
    type T01 = IF1<string>
    type T02 = IF1<any>
    // "yes"
    type T03 = T01 extends T02 ? 'yes' : 'no'
    let obj1: T02 = { name: 'hdl' } as T01
  }
  {
    type T01 = IF1<any>
    type T02 = IF1<string>
    // "yes"
    type T03 = T01 extends T02 ? 'yes' : 'no'
    let obj1: T02 = { name: 'hdl' } as T01
  }
}

{
  // T 有默认值, 和上面效果一样
  interface IF1<T = any> {
    name: T
  }

  {
    type T01 = IF1<string>
    type T02 = IF1
    // "yes"
    type T03 = T01 extends T02 ? 'yes' : 'no'
    let obj1: T02 = { name: 'hdl' } as T01
  }
  {
    type T01 = IF1
    type T02 = IF1<string>
    // "yes"
    type T03 = T01 extends T02 ? 'yes' : 'no'
    let obj1: T02 = { name: 'hdl' } as T01
  }
}

{
  // unknown 让操作只能单向进行, 这是通常我们需要的吧
  interface IF1<T = unknown> {
    name: T
  }

  {
    type T01 = IF1<string>
    type T02 = IF1
    // "yes"
    type T03 = T01 extends T02 ? 'yes' : 'no'
    let obj1: T02 = { name: 'hdl' } as T01
  }
  {
    type T01 = IF1
    type T02 = IF1<string>
    // "no"
    type T03 = T01 extends T02 ? 'yes' : 'no'
    let obj1: T02 = { name: 'hdl' } as T01
  }
}
