{
  let input = [1, 2]
  let [first, second] = input // 解构声明并初始化
  console.log(first) // outputs 1
  console.log(second) // outputs 2
}

{
  let input = [1, 2]
  let [first, second] = input
  // swap variables
  ;[first, second] = [second, first] // 解构赋值
  console.log(first) // outputs 2
  console.log(second) // outputs 1
}

export const preventVSCodeError = 1
