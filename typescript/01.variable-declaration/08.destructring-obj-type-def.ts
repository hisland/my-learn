let o = {
  a: 'foo',
  b: 12,
  c: 'bar',
}

let { a, b }: { a: string; b: number } = o

console.log('a: ', a)
console.log('b: ', b)

export const preventVSCodeError = 1
