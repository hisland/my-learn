declare function ff1<T extends boolean>(x: T): T extends true ? string : number

let xx1 = ff1(Math.random() < 0.5) // string | number
let xx2 = ff1(true) // string
let xx3 = ff1(false) // number

function ff3<T extends boolean>(xx: T) {
  if (xx === true) {
    return 'str'
  } else {
    return 99
  }
}

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

type T10 = TypeName<string | (() => void)> // "string" | "function"
type T12 = TypeName<string | string[] | undefined> // "string" | "array" | "undefined"
type T11 = TypeName<string[] | number[]> // "array"

type BoxedValue<T> = { value: T }
type BoxedArray<T> = { array: T[] }
type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>

type T20 = Boxed<string> // BoxedValue<string>;
type T21 = Boxed<number[]> // BoxedArray<number>;
type T22 = Boxed<string | number[]> // BoxedValue<string> | BoxedArray<number>;

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
