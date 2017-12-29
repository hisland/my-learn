class Foo {
  constructor() {
    console.log('new.target', new.target)
  }
}

let aa = new Foo()

console.log(aa)
