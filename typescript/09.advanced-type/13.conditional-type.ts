export const preventVSCodeError = 1

interface Foo1 {
  addr: string
  title: string
  money: number
}

interface Sub {
  addr: string
}

interface Foo2 extends Foo1 {
  name: string
}

interface Foo3 extends Foo2 {
  name: string
}

type a1 = Sub extends Foo1 ? string : number // number
type a2 = Foo3 extends Foo1 ? string : number // string
