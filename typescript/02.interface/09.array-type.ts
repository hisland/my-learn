interface StringArray1 {
  [index: number]: string // 数字索引是我们正常使用的数组
}

let aa: StringArray1
aa = ['hello', 'god']

interface Dictionary1 {
  [index: string]: string // 字符串索引是我们的对象,只是对象属性的值类型都一样
}

let bb: Dictionary1
bb = { a: '1', b: '2' }

console.log(bb)

interface god {
  [index: number]: string // number索引的值类型必须是下面string索引的子类型
  [index: string]: string
}

interface Dictionary2 {
  [index: string]: string
  length: number // error, the type of 'length' is not a subtype of the indexer
}

// 其实用范型更好

let k1: Array<string>
let k2: Array<number>
let k3: Array<Dictionary2>
let k4: Array<{ x: number; y: number }>

export const preventVSCodeError = 1
