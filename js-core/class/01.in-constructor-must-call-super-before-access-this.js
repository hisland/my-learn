class Foo {}

class Bar extends Foo {
  constructor() {
    // super() // 这里必须先调用 super(), 才能使用 this
    this.god = 1
  }
}

let aa = new Bar()

console.log(aa)
