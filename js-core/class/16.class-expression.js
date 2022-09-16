let FooClz = class Foo {
  constructor() {}
  foo1() {
    console.log('Foo.foo2: ', Foo.foo2())
    return 'instance 1'
  }
  static foo2() {
    return 'static 2'
  }
}

let aa = new FooClz()
// let bb = new Foo // error

console.log(aa.__proto__ === FooClz.prototype)

aa.foo1()
