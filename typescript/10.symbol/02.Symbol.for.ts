export const preventVSCodeError = 1

// Symbol.for 好像是根据 string 取得引用
// 并且在不同的地方取到的是同一个引用
{
  let s1 = Symbol.for('s1')
  let s2 = Symbol.for('s1')

  console.log(s1 === s2) // true 相同
}
