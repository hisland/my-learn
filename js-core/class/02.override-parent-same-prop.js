class Foo {
  constructor(){
    this.god = 22
  }
}

class Bar extends Foo {
  constructor(){
    super()
    this.god = 1
  }
}


let aa = new Bar()

console.log(aa)
