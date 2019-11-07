declare function f<T extends boolean>(x: T): T extends true ? string : number

// Type is 'string | number
let x = f(Math.random() < 0.5)

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
  : 'object'

type T0 = TypeName<string> // "string"
type T1 = TypeName<'a'> // "string"
type T2 = TypeName<true> // "boolean"
type T3 = TypeName<() => void> // "function"
type T4 = TypeName<string[]> // "object"

interface Foo {
  propA: boolean
  propB: boolean
}

declare function f<T>(x: T): T extends Foo ? string : number

function foo<U>(x: U) {
  // Has type 'U extends Foo ? string : number'
  let a = f(x)

  // This assignment is allowed though!
  let b: string | number = a
}

export const preventVSCodeError = 1
