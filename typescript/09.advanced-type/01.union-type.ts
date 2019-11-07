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

export const preventVSCodeError = 1
