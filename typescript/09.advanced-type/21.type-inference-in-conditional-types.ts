type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T

type T0 = Unpacked<string> // string
type T1 = Unpacked<string[]> // string
type T6 = Unpacked<string[][]> // string[]
type T2 = Unpacked<() => string> // string
type T3 = Unpacked<Promise<string>> // string
type T4 = Unpacked<Promise<string>[]> // Promise<string>
type T5 = Unpacked<Unpacked<Promise<string>[]>> // string

type UnpackedDeep<T> = {
  array: T extends (infer U)[] ? UnpackedDeep<U> : T
  fn: T extends (...args: any[]) => infer U ? UnpackedDeep<U> : T
  promise: T extends Promise<infer U> ? UnpackedDeep<U> : T
  plain: T
}[T extends Array<any>
  ? 'array'
  : T extends Function
  ? 'fn'
  : T extends Promise<any>
  ? 'promise'
  : 'plain']

type S0 = UnpackedDeep<string> // string
type S1 = UnpackedDeep<string[]> // string
type S6 = UnpackedDeep<string[][]> // string
type S2 = UnpackedDeep<() => string> // string
type S3 = UnpackedDeep<Promise<string>> // string
type S4 = UnpackedDeep<Promise<string>[]> // string
type S5 = UnpackedDeep<Promise<string>[]> // string

type Foo<T> = T extends { a: infer U; b: infer U } ? U : never
type T10 = Foo<{ a: string; b: string }> // string
type T11 = Foo<{ a: string; b: number }> // string | number

type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
  ? U
  : never
type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }> // string
type T21 = Bar<{ a: (x: string) => void; b: (x: number) => void }> // string & number

export const preventVSCodeError = 1
