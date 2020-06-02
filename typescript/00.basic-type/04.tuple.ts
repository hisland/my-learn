// 对应位置对应类型
// 不可越界
// 位置可设置为 undefined

{
  let aa: [number] = [2]
  console.log(aa)
  aa[0] = 99
  // aa[0] = 'str'
  // aa[1] = 100
  // aa[3] = undefined // Error: Tuple type '[number]' of length '1' has no element at index '3'
}

{
  let aa: [number, string] = [2, 'bb']
  // aa[1] = undefined // 开启 --strictNullChecks 不能这样
  // aa[1] = 3 // Error: Type '3' is not assignable to type 'string'
  aa[1] = 'qq'
}

export const preventVSCodeError = 1
