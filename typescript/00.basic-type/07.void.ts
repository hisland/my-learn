function god1(): void {
  console.log(3)
  return undefined // 函数默认就是返回的 undefined
}
let aa1 = god1()
console.log(aa1)

{
  let aa2: void
  aa2 = null // 正常可以这样, 开启 --strictNullChecks 则不行
  aa2 = undefined // 始终可以接收 undefined
}

function god3(): void {
  console.log(3)
  let kk = 3
  if (kk < 3) {
    return kk // 条件判断里面, 要么不返回, 要么返回 undefined
  }
}

let aa3 = god3()
console.log(aa3)

export const preventVSCodeError = 1
