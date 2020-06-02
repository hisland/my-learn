export const preventVSCodeError = 1

interface Foo {
  addr: string
  title: string
  money: number
}

interface Sub {
  addr: string
}

interface What<T> extends Foo {
  name: T
}

interface Hey<T> extends What<T> {
  mike: string
}

type aa1 = Hey<string> extends What<infer V> ? V : null // infer 必须作用于 generic
type aa2 = Hey<number> extends What<infer V> ? V : null // infer 必须作用于 generic

{
  type aa = Hey<string> extends Foo<infer V> ? string : number // infer 必须作用于 generic
}

// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html

{
  // union type
  type Foo<T> = T extends { a: infer U; b: infer U } ? U : never
  type T10 = Foo<{ a: string; b: string }> // string
  type T11 = Foo<{ a: string; b: number }> // string | number
}

{
  // intersection type
  type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
    ? U
    : never
  type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }> // string
  type T21 = Bar<{ a: (x: string) => void; b: (x: number) => void }> // string & number is never
}
