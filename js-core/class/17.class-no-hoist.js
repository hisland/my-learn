let aa = new Foo() // 不行, 不存在变量提升

class Foo {
  constructor() {}
  foo1() {
    console.log('Foo.foo2: ', Foo.foo2())
    return 'instance 1'
  }
  static foo2() {
    return 'static 2'
  }
}
