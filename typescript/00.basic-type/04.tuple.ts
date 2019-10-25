// 对应位置对应类型
// 不可越界
// 位置可设置为 undefined

{
  let aa: [number] = [2]
  aa[3] = undefined // Tuple type '[number]' of length '1' has no element at index '3'
}

{
  let aa: [number, string] = [2, 'bb']
  aa[1] = undefined
  aa[1] = 3 // Type '3' is not assignable to type 'string'
  aa[1] = 'qq'
}

export const preventVSCodeError = 1
