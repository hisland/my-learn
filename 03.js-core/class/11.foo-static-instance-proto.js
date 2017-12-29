class Foo {
  constructor() {
  }
  foo1(){
    console.log('foo1')
  }
  static foo2(){
    console.log('static foo2')
  }
}

class Bar extends Foo {
  constructor() {
    super()
  }
}


console.log(Bar.foo1)
console.log(Bar.foo2)

let bb = new Bar()

console.log(bb.foo1)
console.log(bb.foo2)
