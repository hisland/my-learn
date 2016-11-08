'use strict'

class Person {
  constructor () {
    console.log(3);
    this.hello()
    this.abc = 'aabbcc';
    this.printAbc(); // tom执行的时候, 是tom的 printAbc
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
    super.printAbc(); // 执行父的 printAbc
  }
  printAbc(){
    console.log('tom: printAbc');
  }
}

new Tom()
