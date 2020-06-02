interface Hello {
  (god: number): number | string // 调用签名
}

function aa(num: number) {
  // 自动推断返回值是 number | 'hey'
  if (num < 3) {
    return 'hey'
  } else {
    return num
  }
}

let Fn: Hello = aa // 函数类型

let bb = Fn(3) // bb type 是  number | string
console.log(bb)

{
  // 变量指定类型
  let f1: (arg1: string) => string = function (arg1) {
    return arg1
  }
  // 函数定义指定类型
  let f2 = function (arg1: string): string {
    return arg1
  }
  // 函数定义 自动推断 类型
  let f4 = function (arg1: string) {
    return arg1
  }
  // interface 类型
  let f3: {
    (arg1: string): string
  } = function (arg1) {
    return arg1
  }
}

export const preventVSCodeError = 1
