class Animal {
  feet: number
  constructor(name: string, numFeet: number) {}
}

class Size {
  feet: number
  constructor(numFeet: number) {}
}

let aa: Animal
let ss: Size

// Static members and constructors do not affect compatibility
aa = ss // OK
ss = aa // OK

export const preventVSCodeError = 1
