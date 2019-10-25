class Greeter {
  static standardGreeting = 'init static'
  greeting: string
  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return Greeter.standardGreeting
    }
  }
}

let greeter1: Greeter = new Greeter() // greeter1是实例
console.log(greeter1.greet()) // init static

// greeterMaker是类, greeterMaker,Greeter都指向同一个类
let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardGreeting = 'static changed!'
console.log(Greeter.standardGreeting) // static changed!

// greeterMaker的instance可以直接用 Greeter 指定, 两者互换
let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet()) // static changed!

export const preventVSCodeError = 1
