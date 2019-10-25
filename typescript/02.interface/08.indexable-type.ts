{
  interface StringArray {
    [index: number]: string // 数字索引
  }

  let aa1: StringArray
  aa1 = ['aa', 'bb'] // 接收数组 ok
  console.log(aa1)

  let aa2: StringArray
  aa2 = {} // 空对象 ok
  console.log(aa2)

  let aa3: StringArray
  aa3 = {
    '0': 'aa', // key可转换成数字的对象 ok
  }
  console.log(aa3)

  let aa4: StringArray
  aa4 = {
    aa: 'aa', // 不能转换成数字 error
  }
  console.log(aa4)
}

{
  interface StringArray {
    [index: string]: string // 字符串索引
  }

  let aa1: StringArray
  aa1 = ['aa', 'bb'] // 数组 类型不匹配 error
  console.log(aa1)

  let aa2: StringArray
  aa2 = {} // 空对象 ok
  console.log(aa2)

  let aa3: StringArray
  aa3 = {
    '0': 'aa', // 对象都ok
  }
  console.log(aa3)

  let aa4: StringArray
  aa4 = {
    aa: 'aa', // 对象都ok
  }
  console.log(aa4)
}

{
  interface MixStringNumber {
    [index: number]: string
    [index: string]: string
  }

  let aa1: MixStringNumber
  aa1 = ['aa', 'bb'] // error?
  console.log(aa1)

  let aa2: MixStringNumber
  aa2 = {} // 空对象 ok
  console.log(aa2)

  let aa3: MixStringNumber
  aa3 = {
    '0': 'aa', // 对象都ok
  }
  console.log(aa3)

  let aa4: MixStringNumber
  aa4 = {
    aa: 'aa', // 对象都ok
  }
  console.log(aa4)
}

{
  interface HandleDict {
    [index: string]: string // 这样可以限定其它的key为相同类型(或者子类型?)
    name: string
  }

  let aa4: HandleDict
  aa4 = {
    name: 'aa', // 这个不可缺少
    '1': 'bb',
    cc: 'cc', // 字符串索引可以任意多个
  }
  aa4[5] = '55' // 索引操作都ok
  aa4['dd'] = 'dd' // 索引操作都ok
  console.log(aa4)
}

{
  interface HandleDict {
    [index: number]: string // 这样可以限定其它的key为相同类型(或者子类型?)
    name: string
  }

  let aa4: HandleDict
  aa4 = {
    name: 'aa', // 这个不可缺少
    '1': 'bb',
    cc: 'cc', // 字符串索引 error
  }
  aa4['5'] = 55 // 索引操作都ok ?
  aa4['dd'] = 55 // 索引操作都ok ?
  console.log(aa4)
}

{
  interface ReadonlyDict {
    readonly [index: number]: string // 限制只读
  }

  let aa5: ReadonlyDict
  aa5 = ['bb']
  console.log(aa5)
  aa5[7] = 'll' // error
}

export const preventVSCodeError = 1
