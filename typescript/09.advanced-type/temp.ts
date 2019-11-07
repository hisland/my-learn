interface Foo {
  foo1: string
}
interface Bar {
  bar1: string
}
interface SS {
  some1: string
  some2: boolean
  none: number
}

type Some<T> = SS[T extends Foo ? 'some1' : T extends Bar ? 'some2' : 'none']

interface User<T = any> {
  name: Some<T>
}

let mike = {
  name: '3'
} as User

console.log(mike)

export const preventVSCodeError = 1

// type UnwrapRef<T> = {
//   cRef: T extends ComputedRef<infer V> ? UnwrapRef<V> : T
//   ref: T extends Ref<infer V> ? UnwrapRef<V> : T
//   array: T extends Array<infer V> ? Array<UnwrapRef<V>> : T
//   object: { [K in keyof T]: UnwrapRef<T[K]> }
// }[T extends ComputedRef<any>
//   ? 'cRef'
//   : T extends Ref
//     ? 'ref'
//     : T extends Array<any>
//       ? 'array'
//       : T extends Function | CollectionTypes
//         ? 'ref' // bail out on types that shouldn't be unwrapped
//         : T extends object ? 'object' : 'ref']
