let o = {
  a: 'foo',
  b: 12,
  c: 'bar',
}

let { a: newName1, b: newName2 } = o

console.log('newName1: ', newName1)
console.log('newName2: ', newName2)
