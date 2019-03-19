class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    console.log('hello, ' + this.greeting)
  }
}

let gg = new Greeter('god')
gg.greet()

gg.other = 99 // 类没有定义的不行 error

export { Greeter }
