{
  interface StringArray1 {
    [index: number]: string // 数字索引是我们正常使用的数组
  }

  let aa: StringArray1 = ['hello', 'god']
  console.log(aa)
  // aa.pop() // Error: Property 'pop' does not exist on type 'StringArray1'

  // 数字索引虽然相当于数组, 但是缺少数组该有的行为
  // 其实用范型更好

  let k1: Array<string> = ['some', 'more']
  k1.pop()
  console.log(k1)

  let k2: string[] = ['some', 'more']
  k2.pop()
  console.log(k2)

  {
    let k2: Array<number>
    let k3: Array<Dictionary2>
    let k4: Array<{ x: number; y: number }>
  }
}

{
  interface Dictionary1 {
    [index: string]: string // 字符串索引是我们的对象,只是对象属性的值类型都一样
  }

  let bb: Dictionary1 = { a: '1', b: '2' }
  console.log(bb)
}

interface God {
  [index: number]: string // number索引的值类型必须是下面string索引的子类型
  [index: string]: string
}

interface Dictionary2 {
  [index: string]: string
  length: number // Error: Property 'length' of type 'number' is not assignable to string index type 'string'
}

export const preventVSCodeError = 1
