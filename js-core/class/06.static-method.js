'use strict'

class Person {
  constructor() {
    console.log(3)
    this.aa = 'person'
    this.hello()
  }

  hello() {
    console.log('hello')
  }

  static def() {
    return 'static def'
  }
}

var p1 = new Person()
console.log(Person.def())
console.log(p1.def()) // 报错
