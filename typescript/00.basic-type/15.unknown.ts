// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html#new-unknown-top-type
export const preventVSCodeError = 1

// In an intersection everything absorbs unknown
type T00 = unknown & null // null
type T01 = unknown & undefined // undefined
type T02 = unknown & null & undefined // null & undefined (which becomes never)
type T03 = unknown & string // string
type T04 = unknown & string[] // string[]
type T05 = unknown & unknown // unknown
type T06 = unknown & any // any

// In a union an unknown absorbs everything
type T10 = unknown | null // unknown
type T11 = unknown | undefined // unknown
type T12 = unknown | null | undefined // unknown
type T13 = unknown | string // unknown
type T14 = unknown | string[] // unknown
type T15 = unknown | unknown // unknown
type T16 = unknown | any // any

// Type variable and unknown in union and intersection
type T20<T> = T & {} // T & {}
type T21<T> = T | {} // T | {}
type T22<T> = T & unknown // T
type T23<T> = T | unknown // unknown

// unknown in conditional types
type T30<T> = unknown extends T ? true : false // Deferred
type T31<T> = T extends unknown ? true : false // Deferred (so it distributes)
type T32<T> = never extends T ? true : false // true
type T33<T> = T extends never ? true : false // Deferred

// keyof unknown
type T40 = keyof any // string | number | symbol
type T41 = keyof unknown // never

// Only equality operators are allowed with unknown
function f10(xx: unknown) {
  xx == 5
  xx !== 10
  xx >= 0 // Error
  xx + 1 // Error
  xx * 2 // Error
  ;-xx // Error
  ;+xx // Error
}

// No property accesses, element accesses, or function calls
function f11(xx: unknown) {
  xx.foo // Error
  xx[5] // Error
  xx() // Error
  new xx() // Error
}

// typeof, instanceof, and user defined type predicates
declare function isFunction(x: unknown): x is Function

function f20(x: unknown) {
  if (typeof x === 'string' || typeof x === 'number') {
    x // string | number
  }
  if (x instanceof Error) {
    x // Error
  }
  if (isFunction(x)) {
    x // Function
  }
}

// Homomorphic mapped type over unknown
type T50<T> = { [P in keyof T]: number }
type T51 = T50<any> // { [x: string]: number }
type T52 = T50<unknown> // {}

// Anything is assignable to unknown
function f21<T>(pAny: any, pNever: never, pT: T) {
  let x: unknown
  x = 123
  x = 'hello'
  x = [1, 2, 3]
  x = new Error()
  x = x
  x = pAny
  x = pNever
  x = pT
}

// unknown assignable only to itself and any
function f22(x: unknown) {
  let v1: any = x
  let v2: unknown = x
  let v3: object = x // Error
  let v4: string = x // Error
  let v5: string[] = x // Error
  let v6: {} = x // Error
  let v7: {} | null | undefined = x // Error
}

// Type parameter 'T extends unknown' not related to object
function f23<T extends unknown>(x: T) {
  let y: object = x // Error
}

// Anything but primitive assignable to { [x: string]: unknown }
function f24(x: { [x: string]: unknown }) {
  x = {}
  x = { a: 5 }
  x = [1, 2, 3]
  x = 123 // Error
}

// Locals of type unknown always considered initialized
function f25() {
  let x: unknown
  let y = x
}

// Spread of unknown causes result to be unknown
function f26(x: {}, y: unknown, z: any) {
  let o1 = { a: 42, ...x } // { a: number }
  let o2 = { a: 42, ...x, ...y } // unknown
  let o3 = { a: 42, ...x, ...y, ...z } // any
}

// Functions with unknown return type don't need return expressions
function f27(): unknown {}

// Rest type cannot be created from unknown
function f28(x: unknown) {
  let { ...a } = x // Error
}

// Class properties of type unknown don't need definite assignment
class C1 {
  a: string // Error
  b: unknown
  c: any
}
