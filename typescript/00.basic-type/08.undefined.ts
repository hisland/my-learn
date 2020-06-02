let aa1: undefined = undefined
// let aa2: undefined = null // 开启 --strictNullChecks 不能这样赋值

let aa3: void = undefined

let aa4: undefined = god0()
console.log(aa4)

function god0(): void {
  console.log(3)
  // 函数默认就是返回的 undefined
}

export const preventVSCodeError = 1
