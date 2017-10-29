class Employee{
  fullName: string;
}

var ee = new Employee();
ee.fullName = 'Bob Smith';
if (ee.fullName) {
  console.log(ee.fullName);
}




var passcode = "secret passcode";

class Employee2{
  private _fullName: string;
  get fullName(): string{
    return this._fullName;
  }
  set fullName(newName: string){
    if (passcode && passcode == "secret passcode") {
      this._fullName = newName;
    }else{
      console.log('Error: Unauthorized update of employee');
    }
  }
}

var e2 = new Employee2();
e2.fullName = 'Bob Smith';
if (e2.fullName) {
  console.log(e2.fullName);
}