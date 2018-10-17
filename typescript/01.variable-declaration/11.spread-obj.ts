let o = {
  a: 'foo',
  b: 12,
  c: 'bar',
}
let { a, b } = o
console.log('1: ', a, b)

// assignment without declaration
;({ a, b } = { a: 'baz', b: 101 })
console.log('2: ', a, b)
