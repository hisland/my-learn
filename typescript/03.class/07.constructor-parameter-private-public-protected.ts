class Animal1 {
  constructor(private name: string) {} // 会自动内部生成private name属性
  move(meters: number) {
    console.log(this.name, ' moved ' + meters + 'm.')
  }
}

class Animal2 {
  constructor(name: string) {}
  move(meters: number) {
    console.log(this.name, ' moved ' + meters + 'm.') // 提示没有定义name属性
  }
}

class Animal3 {
  constructor(public name: string) {} // 会自动内部生成public name属性
  move(meters: number) {
    console.log(this.name, ' moved ' + meters + 'm.')
  }
}

class Animal4 {
  constructor(protected name: string) {} // 会自动内部生成protected name属性
  move(meters: number) {
    console.log(this.name, ' moved ' + meters + 'm.')
  }
}

let aa1 = new Animal1('hey1')
let aa2 = new Animal2('hey2')
let aa3 = new Animal3('hey3')
let aa4 = new Animal4('hey4')

aa1.move(1)
aa2.move(2)
aa3.move(3)
aa4.move(4)

export { Animal1 }
