export const preventVSCodeError = 1

interface Foo {
  addr: string
  title: string
  money: number
}

interface Sub {
  addr: string
}

interface What extends Foo {
  name: string
}

interface Hey extends What {
  name: string
}

type a1 = Sub extends Foo ? string : number // number
type a2 = Hey extends Foo ? string : number // string
