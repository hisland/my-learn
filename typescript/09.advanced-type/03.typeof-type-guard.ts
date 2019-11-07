// typeof 只有这 4 种string值可以作为类型保护函数, 分别支持 ===, !==操作
function isNumber(x: any): x is number {
  return typeof x === 'number'
}
function isString(x: any): x is string {
  return typeof x === 'string'
}
function isBoolean(x: any): x is boolean {
  return typeof x === 'boolean'
}
function isSymbol(x: any): x is symbol {
  return typeof x === 'symbol'
}

function padLeft1(value: string, padding: string | number) {
  // 使用抽离的函数形式
  if (isNumber(padding)) {
    return Array(padding + 1).join(' ') + value
  }
  // 使用抽离的函数形式
  if (isString(padding)) {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

function padLeft2(value: string, padding: string | number) {
  // 直接写在代码里
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  // 直接写在代码里
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

export const preventVSCodeError = 1
