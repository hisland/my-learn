class Foo {
  constructor() {}
  foo1() {
    console.log('foo1')
  }
  static foo2() {
    console.log('static foo2')
  }
}

class Bar extends Foo {
  constructor() {
    super()
  }
}

console.log('class-fn: ', Bar.foo1)
console.log('class-fn: ', Bar.foo2)

let bb = new Bar()

console.log('instance-fn: ', bb.foo1)
console.log('instance-fn: ', bb.foo2)
