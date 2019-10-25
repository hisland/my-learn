class Animal {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

class Rhino extends Animal {
  constructor() {
    super('Rhino')
  }
}

class Employee {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

let aa = new Animal('Dog')
let rr = new Rhino()
let ee = new Employee('Bob')

aa = rr // 继承来的 ok
aa = ee // 虽然定义相同, 但是不认为它们相同 error: Animal and Employee are not compatible

export const preventVSCodeError = 1
