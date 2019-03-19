function foo(target) {
  console.log('foo1: ', target)
}
function goo(target) {
  console.log('goo2: ', target)
}

// single line
// @foo @goo class Hey1 {
//   halo() {
//     console.log(3)
//   }
// }

console.log('1....')
// multi line
@foo
@goo
class Hey2 {
  halo() {
    console.log(3)
  }
}
console.log('2....')

export const preventVSCodeError = 1
