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

{
  // angle-bracket syntax 在 JSX 里面会产生这种混淆, 所以只支持 as 语法
  let foo = <string>bar
  </string>
}

{
  function handler1(event: Event) {
    let element = event as HTMLElement; // Error: Neither 'Event' nor type 'HTMLElement' is assignable to the other
  }
  function handler2(event: Event) {
    let element1 = event as unknown as HTMLElement; // 双转
    let element2 = event as any as HTMLElement; // 双转
    let element3 = event as any as unknown as HTMLElement; // 3转 ???
  }
}

export const preventVSCodeError = 1
