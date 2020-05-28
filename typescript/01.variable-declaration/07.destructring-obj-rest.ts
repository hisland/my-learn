let oo = {
  aa: 'foo',
  bb: 12,
  cc: 'bar',
}

let { aa, ...passthrough } = oo

console.log('aa: ', aa)
console.log('passthrough: ', passthrough)

export const preventVSCodeError = 1
