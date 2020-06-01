// 取的各属性的并集, 而非差集
// 同名属性, 将它们的类型递归 & 进行匹配

interface ii1 {
  foo: string
  bar: number
}

interface ii2 {
  foo: string
  say: boolean
}

type ii3 = ii1 & ii2

// 缺少属性 bar, say
let aa1: ii3 = {
  foo: 'god',
  // bar: 3,
  // say: false,
}
console.log(aa1)

// 缺少属性 say
let aa2: ii3 = {
  foo: 'god',
  bar: 3,
  // say: false,
}
console.log(aa2)

// 缺少属性 bar
let aa3: ii3 = {
  foo: 'god',
  // bar: 3,
  say: false,
}
console.log(aa3)

// ok
let aa4: ii3 = {
  foo: 'god',
  bar: 3,
  say: false,
}

{
  interface T1 {
    height: number
  }
  interface T2 {
    width: number
  }

  interface Foo1 {
    foo: string
    bar: T1
  }

  interface Foo2 {
    foo: number
    bar: T2
    say: boolean
  }

  type Foo3 = Foo1 & Foo2

  let aa1: Foo3 = {
    foo: 'yes', // foo 属性类型 number & string 是 never
    bar: {
      // bar 属性类型 T1 & T2
      width: 3,
      height: 15,
    },
    say: false,
  }
  console.log(aa1)
}

export const preventVSCodeError = 1
