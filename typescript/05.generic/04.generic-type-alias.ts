export const preventVSCodeError = 1

type Foo<T> = {
  name: string
  next: T
}

let obj1: Foo<number> = {
  name: 'foo1',
  next: 10,
}
let obj2: Foo<boolean> = {
  name: 'foo1',
  next: false,
}
