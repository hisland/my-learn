class Animal{
  protected name: string;
  constructor(name: string){
    this.name = name;
  }
}

class Rhino extends Animal{
  constructor(){
    super('Rhino');
  }
  showName(){
    console.log(this.name) // 能访问到父类的 protected 属性
  }
}

var rr = new Rhino();

rr.showName()
console.log(rr.name) // 这里不能访问
