class Animal {
  static foo = 1
  feet: number
  constructor(name: string, numFeet: number) {
    this.feet = numFeet
  }
}

class Size {
  static foo = 'bar'
  feet: number
  constructor(numFeet: number) {
    this.feet = numFeet
  }
}

let aa: Animal = new Animal('foo', 2)
let ss: Size = new Size(3)

// Static members and constructors do not affect compatibility
aa = ss // OK
ss = aa // OK

export const preventVSCodeError = 1
