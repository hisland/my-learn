class Foo {
  constructor() {}
  foo1() {
    return 'instance 1'
  }
  static foo2() {
    return 'static 2'
  }
}

let aa = new Foo()

console.log(aa.__proto__ === Foo.prototype)
