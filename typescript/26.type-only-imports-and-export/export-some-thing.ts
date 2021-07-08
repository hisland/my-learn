type Hello = {
  foo: string
  bar: string
}

const Hello: Hello = {
  foo: 'yes',
  bar: 'good',
}

type Foo = {
  foo: string
  bar: string
}

const Foo: Foo = {
  foo: 'yes',
  bar: 'good',
}

export { Hello } // 值和类型都 export 了
export type { Foo } // 只 export 了类型
