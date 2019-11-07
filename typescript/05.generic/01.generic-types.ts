function identity1<T>(arg: T): T {
  return arg
}
// 函数签名
let myIdentity1: <T>(arg: T) => T = identity1

function identity2<T>(arg: T): T {
  return arg
}
// T 是任意指定的, 用U代替, 名字不重要, 重要的是数量和使用方式
let myIdentity2: <U>(arg: U) => U = identity2

function identity3<T>(arg: T): T {
  return arg
}
// 可以用 call-signature object literal type
let myIdentity3: { <T>(arg: T): T } = identity3

// 用 call-signature 就可以把它变成 interface
interface GenericIdentityFn1 {
  <T>(arg: T): T
}
function identity4<T>(arg: T): T {
  return arg
}
let myIdentity4: GenericIdentityFn1 = identity4 // 这个是根据调用动态指定T

// generic parameter 可以上提到 interface
interface GenericIdentityFn2<T> {
  (arg: T): T
}

function identity5<T>(arg: T): T {
  return arg
}
let myIdentity5: GenericIdentityFn2<number> = identity5 // 这个已经强制 myIdentity 只接受number

export const preventVSCodeError = 1
