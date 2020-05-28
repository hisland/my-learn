let oo: any = {
  aa: 'foo',
  bb: 12,
  cc: 'bar',
}
let { aa = 10, xx = 'god' }: { aa: number; xx: string } = oo
console.log('aa: ', aa) // 'foo'
console.log('xx: ', xx) // 'god' is default value

export const preventVSCodeError = 1
