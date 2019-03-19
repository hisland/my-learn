let o = {
  a: 'foo',
  b: 12,
  c: 'bar',
}

let { a, ...passthrough } = o

console.log('a: ', a)
console.log('passthrough: ', passthrough)

export const preventVSCodeError = 1
