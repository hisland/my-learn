class Animal2 {
  // 会自动内部生成public name属性
  constructor(public name: string) {}
}

class Animal3 {
  // 会自动内部生成public name属性
  constructor(public name: string) {
    this.name = 'some'
  }
}

let aa2 = new Animal2('hey2')
console.log(aa2) // name 属性是 'hey2'

let aa3 = new Animal3('hey3')
console.log(aa3) // name 属性是 'some'

export { Animal3 }
