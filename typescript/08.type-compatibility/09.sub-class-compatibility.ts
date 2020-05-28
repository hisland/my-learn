class Animal {
  private feet: number
  constructor(name: string, numFeet: number) {}
}

class Size extends Animal {
  foo: string
}

let aa: Animal = new Animal('foo', 2)
let ss: Size = new Size('bar', 3)

// Private and protected members in a class affect their compatibility
aa = ss // OK
ss = aa // Error

export const preventVSCodeError = 1
