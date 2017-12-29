class Foo {
  constructor() {
    this.god = 22
  }
  get abc() {
    return 'this is abc'
  }
  set abc(val) {
    this.god = 'set abc'
  }
}

let aa = new Foo()

console.log(aa)
console.log(aa.abc)
aa.abc = 'any'
console.log(aa)
