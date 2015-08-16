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

a = r; //ok
a = e; //error: Animal and Employee are not compatible
