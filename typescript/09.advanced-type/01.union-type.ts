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
// 2 个类型都不满足, Error
let aa1: ii3 = {
  foo: 'god',
}

// 满足 ii1
let aa2: ii3 = {
  foo: 'god',
  bar: 3,
}

// 满足 ii2
let aa3: ii3 = {
  foo: 'god',
  say: true,
}

let aa4: ii3 = {
  foo: 'god',
  bar: 3,
  say: true,
}

export const preventVSCodeError = 1
