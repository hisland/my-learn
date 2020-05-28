{
  interface StringArray {
    [index: number]: string // 数字索引
  }

  let aa1: StringArray = ['aa', 'bb'] // 接收数组 兼容
  console.log(aa1)

  let aa2: StringArray = {} // 空对象 兼容
  console.log(aa2)

  let aa3: StringArray = {
    '0': 'aa', // key可转换成数字的对象 兼容
  }
  console.log(aa3)

  let aa4: StringArray = {
    aa: 'aa', // 不能转换成数字 Error
  }
  console.log(aa4)
}

{
  interface StringArray {
    [index: string]: string // 字符串索引
  }

  let aa1: StringArray = ['aa', 'bb'] // 数组 类型不匹配 Error
  console.log(aa1)

  let aa2: StringArray = {} // 空对象 ok
  console.log(aa2)

  let aa3: StringArray = {
    '0': 'aa', // 对象都 兼容
  }
  console.log(aa3)

  let aa4: StringArray = {
    aa: 'aa', // 对象都 兼容
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

  let aa4: HandleDict = {
    name: 'aa', // 显示指定的 ok, 必填
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

  let aa4: HandleDict = {
    name: 'aa', // 显示指定的 ok, 必填
    '1': 'bb', // 可转换成数字的索引 ok
    cc: 'cc', // 字符串索引 error
  }
  aa4['5'] = 55 // Error: 索引必须是数字
  aa4['dd'] = 55 // Error: 索引必须是数字
  console.log(aa4)
}

{
  interface ReadonlyDict {
    readonly [index: number]: string // 限制只读
  }

  let aa5: ReadonlyDict
  aa5 = ['bb']
  console.log(aa5)
  aa5[7] = 'll' // Error: 不可赋值
}

export const preventVSCodeError = 1
