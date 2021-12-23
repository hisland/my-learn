export const preventVSCodeError = 1

// {
//   interface Ref<T = any> {
//     value: T
//   }
//   type ToRefs<T = any> = { [K in keyof T]: Ref<T[K]> }
//   type T0 = ToRefs
//   type T1 = ToRefs<string>
//   type T2 = ToRefs<number>
//   type T3 = ToRefs<boolean>
//   type T4 = ToRefs<{ name: string }>
//   type T5 = ToRefs<Ref<string>>
// }

{
  // function last<T>(xs: T[]): T | undefined {
  //   return xs[xs.length - 1]
  // }

  // console.log(last([]))
  // console.log(last([1]))
  // console.log(last(['a']))

  let xx: number[] = [1, 2, 3]
  console.log(xx[-2])
  console.log(xx[-1])
  console.log(xx[0])
  console.log(xx[1])
  console.log(xx[2])
}
