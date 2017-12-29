class Foo {
  constructor() {
    console.log(arguments)
  }
}

let aa = new Foo(1, 2, 3)

console.log(aa)
