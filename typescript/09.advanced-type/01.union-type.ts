export const preventVSCodeError = 1

interface ii1 {
  foo: string
  bar: number
}

interface ii2 {
  foo: string
  say: boolean
}

type ii3 = ii1 | ii2

// 联合类型表示一个值可以是几种类型之一
// 同名属性, 将它们的类型递归 | 进行匹配

// 2 个类型都不满足, Error
let aa1: ii3 = {
  foo: 'god',
}
console.log(aa1)

// 满足 ii1 即可
let aa2: ii3 = {
  foo: 'god',
  bar: 3,
}
console.log(aa2)

// 满足 ii2 即可
let aa3: ii3 = {
  foo: 'god',
  say: true,
}
console.log(aa3)

// 相当于 ii1 & ii2
let aa4: ii3 = {
  foo: 'god',
  bar: 3,
  say: true,
}
console.log(aa4)

let aa5: ii3 = {
  foo: 'god',
  bar: 3,
  say: true,
  more: 'more', // 多余的属性
}
console.log(aa5)

interface LongLongLongLongLong1 {}
interface LongLongLongLongLong2 {}
interface LongLongLongLongLong3 {}

// 换行之后, | 打头, 自动格式化结果就这样
type multi =
  | LongLongLongLongLong1
  | LongLongLongLongLong2
  | LongLongLongLongLong3

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

  type Foo3 = Foo1 | Foo2

  {
    // 符合 Foo2
    let aa1: Foo3 = {
      foo: 33, // foo 属性类型 number | string
      bar: {
        // bar 属性类型 T1 | T2
        width: 3,
      },
      say: false,
    }
    console.log(aa1)
  }

  {
    // foo,bar 2 者组合出来, 都不符合
    let aa1: Foo3 = {
      foo: 22, // foo 属性类型 number | string
      bar: {
        // bar 属性类型 T1 | T2
        height: 3,
      },
      say: false,
    }
    console.log(aa1)
  }

  {
    // 符合 Foo1
    let aa1: Foo3 = {
      foo: 'yes', // foo 属性类型 number | string
      bar: {
        // bar 属性类型 T1 | T2
        height: 3,
      },
    }
    console.log(aa1)
  }

  {
    // 符合 Foo1 & Foo2
    let aa1: Foo3 = {
      foo: 'yes', // foo 属性类型 number | string
      bar: {
        // bar 属性类型 T1 | T2
        height: 3,
      },
      say: false,
    }
    console.log(aa1)
  }
}
