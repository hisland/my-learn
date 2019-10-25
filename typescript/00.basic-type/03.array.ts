// 元素类型后面接上[]
{
  let list: number[] = []
  list = [4, 5, 6, 7, 8]
  console.log(list)
  list.push('a') // 数组里面只能放相同类型
}
// 数组泛型 generic array
{
  let list: Array<number> = []
  list = [4, 5, 6]
  console.log(list)
  list.push('a') // 数组里面只能放相同类型
}

export const preventVSCodeError = 1
