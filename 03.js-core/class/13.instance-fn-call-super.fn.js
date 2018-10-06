'use strict'

class Tom1 {
  constructor() {}
  hello() {
    console.log('hello 1')
  }
}

class Tom2 extends Tom1 {
  constructor() {
    super()
  }
  hello() {
    super.hello()
    console.log('hello 2')
  }
}

class Tom3 extends Tom2 {
  constructor() {
    super()
  }
  hello() {
    super.hello()
    // super.super.hello() // 不能多层 call
    console.log('hello 3')
  }
}

var aa = new Tom3()

aa.hello()
