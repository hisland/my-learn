export const preventVSCodeError = 1

{
  // foo1 只有 3 个重载签名
  function foo1(val: number): number
  function foo1(val: string): string
  function foo1(val: boolean): boolean
  // 具体实现要覆盖上面的所有重载, 自己不算函数签名
  function foo1(val: string | number | boolean): string | number | boolean {
    return val
  }
  console.log(foo1(33))
  console.log(foo1('str'))
  console.log(foo1(true))
}

{
  // foo1 只有 3 个重载签名
  function foo1(val: number): number
  function foo1(val: string): string
  function foo1(val: boolean): boolean
  // 具体实现要覆盖上面的所有重载, 自己不算函数签名
  function foo1(val: string): string {
    return val
  }
  console.log(foo1(33))
  console.log(foo1('str'))
  console.log(foo1(true))
}
