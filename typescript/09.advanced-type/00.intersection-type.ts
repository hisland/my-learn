// 取的各类型属性的并集, 而非差集
//

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

export const preventVSCodeError = 1
