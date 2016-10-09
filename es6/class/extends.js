'use strict'

class Person {
  constructor () {
    console.log(3);
    this.aa = 'person'
    this.hello();
  }

  hello(){
    console.log('hello');
  }

  static def(){
    return 'static def';
  }
}

var p1 = new Person()


class Tom extends Person {
  constructor (){
    super()
    this.am = 'tom'
    this.hello();
    console.log(super.def);
  }
}

var t1 = new Tom()
