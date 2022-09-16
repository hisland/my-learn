class Foo {
  constructor(name) {
    this.name = name
  }
}

class Bar extends Foo {
  constructor(aa) {
    console.log('arguments: ', arguments)
    super(aa)
  }
}

let aa = new Bar(11, 22, 33)

console.log(aa)
