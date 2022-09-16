'use strict'

class Person {
  constructor() {
    console.log(3)
    this.hello()
    this.abc = 'aabbcc'
    this.printAbc()
  }
  hello() {
    console.log('hello')
  }
  printAbc() {
    console.log(this.abc)
  }
}

new Person()
