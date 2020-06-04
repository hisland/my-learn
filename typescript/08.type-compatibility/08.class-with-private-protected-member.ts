class Animal {
  private feet: number
  constructor(name: string, numFeet: number) {
    this.feet = numFeet
  }
}

class Size {
  private feet: number
  constructor(numFeet: number) {
    this.feet = numFeet
  }
}

let aa: Animal = new Animal('foo', 2)
let ss: Size = new Size(3)

// Private and protected members in a class affect their compatibility
aa = ss // Error
ss = aa // Error

export const preventVSCodeError = 1
