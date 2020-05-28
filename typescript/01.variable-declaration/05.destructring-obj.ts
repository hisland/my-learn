let oo = {
  aa: 'foo',
  bb: 12,
  cc: 'bar',
}
let { aa, bb } = oo
console.log('1: ', aa, bb)

// assignment without declaration
;({ aa, bb } = { aa: 'baz', bb: 101 })
console.log('2: ', aa, bb)

export const preventVSCodeError = 1
