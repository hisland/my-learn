'use strict'

class Person {
  constructor () {
    console.log(3);
    this.hello()
    this.abc = 'aabbcc';
    this.printAbc();
  }
  hello(){
    console.log('hello');
  }
  printAbc(){
    console.log(this.abc);
  }
}

class Tom extends Person{
  constructor () {
    super();
    console.log('tom');
  }
  // 覆盖了父类的同名方法
  printAbc(){
    console.log('tom: printAbc');
  }
}

new Tom()
