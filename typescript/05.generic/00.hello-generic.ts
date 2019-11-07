function identity1(arg: number): number {
  // 只适用number
  return arg
}

function identity2(arg: any): any {
  // 适用任意值, 只是输入输出可以不同, 没有限制
  return arg
}

function identity3<T>(arg: T): T {
  // 适用任意值, 输入输出 相同, 泛型
  return arg
}
let output1 = identity3<string>('myString') // type of output will be 'string'
console.log(output1)
let output2 = identity3('myString') // type of output will be 'string'
console.log(output2)

// 类型参数辅助提示代码错误
function loggingIdentity1<T>(arg: T): T {
  console.log(arg.length) // Error: T doesn't have .length
  return arg
}
function loggingIdentity2<T>(arg: T[]): T[] {
  console.log(arg.length) // Array has a .length, so no more error
  return arg
}
function loggingIdentity3<T>(arg: Array<T>): Array<T> {
  console.log(arg.length) // Array has a .length, so no more error
  return arg
}

export const preventVSCodeError = 1
