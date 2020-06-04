class Animal {
  private feet: number
  constructor(name: string, numFeet: number) {}
}

class Size extends Animal {
  foo: string = 'foo'
}

let pp: Animal = new Animal('foo', 2)
let sub: Size = new Size('bar', 3)

// Private and protected members in a class affect their compatibility
pp = sub // OK
sub = pp // Error

export const preventVSCodeError = 1
