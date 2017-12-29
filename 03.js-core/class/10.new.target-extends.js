class Foo {
  constructor() {
    console.log('parent: new.target', new.target)
  }
}

class Bar extends Foo {
  constructor() {
    super()
    console.log('sub: new.target', new.target)
  }
}

let aa = new Foo()
let bb = new Bar() // new.target 都是指向 Bar

console.log(aa)
console.log(bb)
