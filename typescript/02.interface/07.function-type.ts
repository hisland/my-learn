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

export const preventVSCodeError = 1
