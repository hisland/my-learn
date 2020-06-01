export const preventVSCodeError = 1

type Nullable<T> = { [P in keyof T]: T[P] | null }
type Readonly<T> = { readonly [P in keyof T]: T[P] }
type Partial<T> = { [P in keyof T]?: T[P] }

interface Person {
  name: string
  age: number
}

type PersonNullable = Nullable<Person>
type PersonPartial = Partial<Person>
type ReadonlyPerson = Readonly<Person>

type Keys = 'option1' | 'option2'
type Flags = { [K in Keys]: boolean }

let aa: ReadonlyPerson = {
  name: 'halo',
  age: 3,
}
console.log(aa)

let bb: Flags = {
  option1: true,
  option2: false,
}
console.log(bb)

type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>

{
  interface Person {
    readonly addr: string
    name: string
    age: number
    height?: number
  }

  // 原样复制
  type PersonNullable1 = { [P in keyof Person]: Person[P] }

  // 增加 readonly 标志 全部只读, 2 个操作相同, 通常省略+号
  type PersonNullable2 = { readonly [P in keyof Person]: Person[P] }
  type PersonNullable3 = { +readonly [P in keyof Person]: Person[P] }

  // 去掉 readonly 标志 全部可写
  type PersonNullable4 = { -readonly [P in keyof Person]: Person[P] }

  // 增加可选标志 全部可选, 2 个操作相同, 通常省略+号
  type PersonNullable5 = { [P in keyof Person]+?: Person[P] }
  type PersonNullable6 = { [P in keyof Person]?: Person[P] }

  // 去掉可选标志 全部必填
  type PersonNullable7 = { [P in keyof Person]-?: Person[P] }

  // 混合上述操作
  type PersonNullable8 = { -readonly [P in keyof Person]-?: Person[P] }
}
