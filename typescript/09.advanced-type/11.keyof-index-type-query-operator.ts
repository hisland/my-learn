// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html
// 这里有添加说明
// keyof T 实际上是 'string-literal' | string | number | symbol 的子集

{
  // https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types-and-index-signatures
  // 这里说明了 string index 的 keyof 是 string | number, 因为 js 里面
  // 访问某个属性可以是 obj[42] 或者 obj['42']

  // 有 字符串类型索引是 // string | number
  interface Person {
    [index: string]: string
  }

  type Props = keyof Person

  let ss1: Props = 'name'
  let ss2: Props = 33
}

{
  // 有 数字类型索, 这里只有 number
  interface Person {
    [index: number]: string
  }

  type Props = keyof Person

  let ss1: Props = 'name' // Error
  let ss2: Props = 33
}

{
  // 没有索引是 属性的 union
  interface Person {
    name: string
    age: number
    height: number
  }

  type Props = keyof Person // "name" | "age" | "height"

  let ss1: Props = 'name'
  let ss2: Props = 'age'
  let ss3: Props = 'height'
  let ss4: Props = 33 // 没有索引属性, 好像不会有 number
}

{
  // 混合 数字索引
  interface Person {
    [index: number]: string
    name: string
    age: number
    height: number
  }

  type Props = keyof Person // number | "name" | "age" | "height"

  let ss1: Props = 'name'
  let ss2: Props = 'age'
  let ss3: Props = 'height'
  let ss4: Props = 33
}

{
  // 混合 字符串索引, string | number, 不像数字还有 其它属性的 union
  interface Person {
    [index: string]: string
    name: string
  }

  type Props = keyof Person

  let ss1: Props = 'name'
  let ss2: Props = 'not exist'
  let ss4: Props = 33
}

{
  interface Person {
    name: string
    age: number
    height: number
  }

  type Props1 = keyof Person // "name" | "age" | "height"
  type Props2 = keyof Props1 // 好像是 keyof string, 对比下面
  type Props3 = keyof string
}

{
  interface Person {
    [index: number]: string
  }

  type Props1 = keyof Person
  type Props2 = keyof Props1 // 好像是 keyof number, 对比下面
  type Props3 = keyof number
}

{
  interface Person {
    [index: string]: string
  }

  type Props1 = keyof Person
  type Props2 = keyof Props1 // "toString" | "valueOf", 好像是 keyof (number | string), 对比下面
  type Props3 = keyof (number | string)
  type Props4 = keyof number & keyof string // 好像是这个意思
}

{
  // 计算属性
  const ss1 = Symbol()
  const ss2 = Symbol()
  interface Person {
    [ss1]: string // 这 2 个分别产生 2 个 unique symbol
    [ss2]: number // 这 2 个分别产生 2 个 unique symbol
    name: string
  }

  type Props1 = keyof Person // "name" | unique symbol | unique symbol
}

export const preventVSCodeError = 1
