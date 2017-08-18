// 类型断言, 由程序员自己决定怎么做
// 类型断言 实际就像 其它语言的 类型转换
// A type assertion is like a type cast in other languages

let aa1: any = 'hey'

let aa2: string = (<string> aa1) // 方法一
let aa3: string = aa1 as string // 方法二, JSX只能用这种
