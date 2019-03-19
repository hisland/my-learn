class Animal {
  private feet: number
  constructor(name: string, numFeet: number) {}
}

class Size {
  private feet: number
  constructor(numFeet: number) {}
}

let aa: Animal
let ss: Size

// Private and protected members in a class affect their compatibility
aa = ss // Error
ss = aa // Error

export const preventVSCodeError = 1
