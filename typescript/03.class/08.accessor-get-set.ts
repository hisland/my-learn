class Employee1 {
  fullName: string
}

let ee1 = new Employee1()
ee1.fullName = 'Bob Smith'
if (ee1.fullName) {
  console.log(ee1.fullName)
}

let passcode = 'secret passcode'

class Employee2 {
  private _fullName: string
  get fullName(): string {
    return this._fullName
  }
  set fullName(newName: string) {
    if (passcode && passcode == 'secret passcode') {
      this._fullName = newName
    } else {
      console.log('Error: Unauthorized update of employee')
    }
  }
}

let ee2 = new Employee2()
ee2.fullName = 'Bob Smith'
if (ee2.fullName) {
  console.log(ee2.fullName)
}
