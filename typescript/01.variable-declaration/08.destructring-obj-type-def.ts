let oo = {
  aa: 'foo',
  bb: 12,
  cc: 'bar',
}

let { aa, bb }: { aa: string; bb: number } = oo

console.log('aa: ', aa)
console.log('bb: ', bb)

export const preventVSCodeError = 1
