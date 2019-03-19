interface ii1 {
  foo: string
  bar: number
}

interface ii2 {
  foo: string
  say: boolean
}

type ii3 = ii1 & ii2

// 缺少 bar, say
let aa1: ii3 = {
  foo: 'god',
}

// 缺少 say
let aa2: ii3 = {
  foo: 'god',
  bar: 3,
}

// 缺少 bar
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
