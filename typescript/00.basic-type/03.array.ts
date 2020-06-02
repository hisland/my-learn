{
  let list: number[] = []
  list.push(1)
  list.push(2)
  list.push(3)
  console.log(list)
}

{
  // 元素类型后面接上[]
  let list: number[] = []
  list = [4, 5, 6, 7, 8]
  console.log(list)
  // list.push('aa') // Error 数组里面只能放相同类型
}
{
  // 数组泛型 generic array, 工具提示还是 number[], 也许是等价的
  let list: Array<number> = []
  list = [4, 5, 6]
  console.log(list)
  // list.push('aa') // Error 数组里面只能放相同类型
}

{
  type T1 = number[] // number[]
  type KEYS = keyof T1 // 有很多属性, 不知道 number 是什么
  type T2 = T1[number] // number
  type T3 = T1[123] // number, 随意数字也能达到 number 的效果
}

{
  type T1 = string[] // string[]
  type KEYS = keyof T1 // 有很多属性, 不知道 number 是什么
  type T2 = T1[number] // string
  type T3 = T1[123] // string, 随意数字也能达到 number 的效果
}

{
  // 跟上面一样
  type T1 = Array<string>
  type KEYS = keyof T1
  type T2 = T1[number]
  type T3 = T1[123]
}

export const preventVSCodeError = 1
