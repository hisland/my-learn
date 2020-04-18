interface Hello {
  foo: string
  bar: string
}

const obj: Hello = {} // 这个不行, 即使后面把属性补上也不行

obj.foo = 'yes'
obj.bar = 'god'

console.log(obj)

export const preventVSCodeError = 1
