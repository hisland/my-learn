class Animal2 {
  readonly foo1: number
  readonly foo2: number
  readonly foo3: number = 3
  constructor() {
    this.foo2 = 99
  }
}

let aa2 = new Animal2()
console.log(aa2.foo1) // undefined
console.log(aa2.foo2) // 99
console.log(aa2.foo3) // 3

export { Animal2 }
