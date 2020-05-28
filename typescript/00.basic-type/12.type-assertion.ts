// 类型断言, 由程序员自己决定怎么做
// 类型断言 实际就像 其它语言的 类型转换
// A type assertion is like a type cast in other languages

let aa1: any = 'hey'

{
  let aa2: string = <string>aa1 // 方法一 angle-bracket syntax
  let aa3: string = aa1 as string // 方法二, as-syntax,  JSX 只能用这种
  console.log(aa2)
  console.log(aa3)
}

{
  let aa2: number = <number>aa1 // 因为是用户强制, 知道自己在干什么, 所以这里没报错
  let aa3: number = aa1 as number // 但实际上上面的值是不能转换的
  console.log(aa2)
  console.log(aa3)
}

export const preventVSCodeError = 1
