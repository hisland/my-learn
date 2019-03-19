function foo() {
  console.log('foo(): evaluated')
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('foo(): called')
  }
}

function goo() {
  console.log('goo(): evaluated')
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('goo(): called')
  }
}

console.log('1...')
class C {
  @foo()
  @goo()
  hey() {
    console.log('hello!')
  }
}

console.log('2...')
let aa = new C()
console.log('3...')
aa.hey()
console.log('4...')

export const preventVSCodeError = 1
