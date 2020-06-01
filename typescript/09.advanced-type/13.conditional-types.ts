declare function ff1<T extends boolean>(x: T): T extends true ? string : number

// Type is 'string | number
let x = ff1(Math.random() < 0.5)

type TypeName<T> = T extends string
  ? 'string'
  : T extends number
  ? 'number'
  : T extends boolean
  ? 'boolean'
  : T extends undefined
  ? 'undefined'
  : T extends Function
  ? 'function'
  : T extends Array<infer V>
  ? 'array'
  : 'object'

type T0 = TypeName<string> // "string"
type T1 = TypeName<'a'> // "string"
type T2 = TypeName<true> // "boolean"
type T3 = TypeName<() => void> // "function"
type T4 = TypeName<string[]> // "array"
type T5 = TypeName<{}> // "object"

interface Foo {
  propA: boolean
  propB: boolean
}

declare function ff2<T>(x: T): T extends Foo ? string : number

function foo<U>(x: U) {
  // Has type 'U extends Foo ? string : number'
  let a = ff2(x)

  // This assignment is allowed though!
  let b: string | number = a
}

export const preventVSCodeError = 1
