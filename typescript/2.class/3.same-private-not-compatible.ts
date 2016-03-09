class Animal{
  private name: string;
  constructor(name: string){
    this.name = name;
  }
}

class Rhino extends Animal{
  constructor(){
    super('Rhino');
  }
}

class Employee{
  private name: string;
  constructor(name: string){
    this.name = name;
  }
}

var a = new Animal('Dog');
var r = new Rhino();
var e = new Employee('Bob');

a = r; // 继承来的 ok
a = e; // 虽然定义相同, 但是不认为它们相同 error: Animal and Employee are not compatible
