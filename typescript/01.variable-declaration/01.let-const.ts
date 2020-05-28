//let, const 的作用域是 以 {} 为单位的
{
  // 期望的 1 到 9
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i)
    }, 100 * i)
  }
}

{
  const FOO2 // Error: 常量定义的时候就要赋值, 因为后续不能再赋值

  const FOO = 1

  // FOO = 2 // Error: 不能再赋值
}

export const preventVSCodeError = 1
