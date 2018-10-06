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

console.log(aa.foo3)

Foo.prototype.foo3 = function() {
  return 'instance 3'
}

console.log(aa.foo3())
