interface aa {
  foo: string
}
interface aa {
  bar: number
}

// 缺少 bar
let some1: aa = {
  foo: 'halo',
}

// 缺少 foo
let some2: aa = {
  bar: 4,
}

let some3: aa = {
  foo: 'halo',
  bar: 4,
}

export const preventVSCodeError = 1
