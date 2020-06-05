export const preventVSCodeError = 1

{
  // type, interface 相互作用, 跟 interface,type 两两互相作用一样的判别方式
  // 这里 2 个相互包含
  type T1 = {
    name: string
    age: number
  }

  // 同名 interface 定义会自动合并
  interface IF1 {
    name: string
  }
  interface IF1 {
    age: number
  }

  {
    // "yes"
    type T01 = T1 extends IF1 ? 'yes' : 'no'
    let obj1: IF1 = {} as T1
  }
  {
    // "yes"
    type T01 = IF1 extends T1 ? 'yes' : 'no'
    let obj1: T1 = {} as IF1
  }
}

{
  // type, interface 相互作用, 跟 interface,type 两两互相作用一样的判别方式
  // 这里 T1 包含 IF1
  type T1 = {
    name: string
    age: number
    height: number
  }

  // 同名 interface 定义会自动合并
  interface IF1 {
    name: string
  }
  interface IF1 {
    age: number
  }

  {
    // "yes"
    type T01 = T1 extends IF1 ? 'yes' : 'no'
    let obj1: IF1 = {} as T1
  }
  {
    // "no"
    type T01 = IF1 extends T1 ? 'yes' : 'no'
    let obj1: T1 = {} as IF1
  }
}

{
  // 这里 IF1 包含 T1
  type T1 = {
    name: string
    age: number
  }

  // 同名 interface 定义会自动合并
  interface IF1 {
    name: string
  }
  interface IF1 {
    age: number
    height: number
  }

  {
    // "no"
    type T01 = T1 extends IF1 ? 'yes' : 'no'
    let obj1: IF1 = {} as T1
  }
  {
    // "yes"
    type T01 = IF1 extends T1 ? 'yes' : 'no'
    let obj1: T1 = {} as IF1
  }
}

{
  // interface 继承
  interface IF1 {
    name: string
  }
  interface IF2 extends IF1 {
    age: number
  }

  {
    // "no"
    type T01 = IF1 extends IF2 ? 'yes' : 'no'
    let obj1: IF2 = {} as IF1
  }
  {
    // "yes"
    type T01 = IF2 extends IF1 ? 'yes' : 'no'
    let obj1: IF1 = {} as IF2
  }
}

{
  // 属性数量, 名字相同, 但是属性类型不同
  interface IF1 {
    name: string
  }
  interface IF2 {
    name: number
  }

  {
    // "no"
    type T01 = IF1 extends IF2 ? 'yes' : 'no'
    let obj1: IF2 = {} as IF1
  }
  {
    // "no"
    type T01 = IF2 extends IF1 ? 'yes' : 'no'
    let obj1: IF1 = {} as IF2
  }
}

{
  // 属性数量, 名字相同, 属性类型单向兼容
  interface IF1 {
    name: string
  }
  interface IF2 {
    name: number | string
  }

  {
    // "yes"
    type T01 = IF1 extends IF2 ? 'yes' : 'no'
    let obj1: IF2 = {} as IF1
  }
  {
    // "no"
    type T01 = IF2 extends IF1 ? 'yes' : 'no'
    let obj1: IF1 = {} as IF2
  }
}

{
  // IF1, IF2 属性互不同名
  interface IF1 {
    name: string
  }
  interface IF2 {
    age: number
  }

  {
    // "no"
    type T01 = IF1 extends IF2 ? 'yes' : 'no'
    let obj1: IF2 = {} as IF1
  }
  {
    // "no"
    type T01 = IF2 extends IF1 ? 'yes' : 'no'
    let obj1: IF1 = {} as IF2
  }
}

{
  // IF1 包含 IF2
  interface IF1 {
    name: string
    age: number
  }
  interface IF2 {
    age: number
  }

  {
    // "yes"
    type T01 = IF1 extends IF2 ? 'yes' : 'no'
    let obj1: IF2 = {} as IF1
  }
  {
    // "no"
    type T01 = IF2 extends IF1 ? 'yes' : 'no'
    let obj1: IF1 = {} as IF2
  }
}

{
  // IF1, IF2 有交集, 但是没有完全包含
  interface IF1 {
    name: string
    age: number
  }
  interface IF2 {
    age: number
    height: number
  }

  {
    // "no"
    type T01 = IF1 extends IF2 ? 'yes' : 'no'
    let obj1: IF2 = {} as IF1
  }
  {
    // "no"
    type T01 = IF2 extends IF1 ? 'yes' : 'no'
    let obj1: IF1 = {} as IF2
  }
}

{
  // class 继承
  class CLZ1 {
    name: string = 'hdl'
  }
  class CLZ2 extends CLZ1 {
    age: number = 18
  }

  {
    // "no"
    type T01 = CLZ1 extends CLZ2 ? 'yes' : 'no'
    let obj1: CLZ2 = {} as CLZ1
  }
  {
    // "yes"
    type T01 = CLZ2 extends CLZ1 ? 'yes' : 'no'
    let obj1: CLZ1 = {} as CLZ2
  }
}

{
  // class, interface 相互
  class CLZ1 {
    name: string = 'hdl'
    age: number = 18
  }
  interface IF1 {
    name: string
    age: number
  }

  {
    // "yes"
    type T01 = CLZ1 extends IF1 ? 'yes' : 'no'
    let obj1: IF1 = {} as CLZ1
  }
  {
    // "yes"
    type T01 = IF1 extends CLZ1 ? 'yes' : 'no'
    let obj1: CLZ1 = {} as IF1
  }
}

{
  // 完全一样
  interface IF1 {
    name: string
  }
  interface IF2 {
    name: string
  }

  {
    // "yes"
    type T01 = IF1 extends IF2 ? 'yes' : 'no'
    let obj1: IF2 = {} as IF1
  }
  {
    // "yes"
    type T01 = IF2 extends IF1 ? 'yes' : 'no'
    let obj1: IF1 = {} as IF2
  }
}
