export const preventVSCodeError = 1

{
  class Clock3 {
    currentTime: Date
    constructor(h: number, m: number) {
      this.currentTime = new Date()
    }
  }

  let newClock: Clock3 = new Clock3(7, 30)
  console.log(newClock)
}

{
  interface ClockConstructor {
    new (hour: number, minute: number) // 构造签名
  }

  // 这样不行的, 因为 构造签名 属性 static side
  // Clock 创建的类型只管实例属性, 并不包含 constructor 声明, 没有正确实现 ClockConstructor 的 构造签名
  // 所以这一句话并不能同时完成 2 个操作, 始终是不行的
  class Clock implements ClockConstructor {
    currentTime: Date
    constructor(h: number, m: number) {}
  }

  let newClock: Clock = new Clock(7, 30)
  console.log(newClock)
}

{
  interface ClockConstructor {
    new (hour: number, minute: number)
  }

  interface ClockInterface {
    tick()
  }

  // ClockConstructor 有 构造签名, 它指定的变量应该是一个 class, 并且实现这个签名
  // 这里首先声明一个 class, 然后赋值给 Clock, 实际上是 2 步操作
  const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
      console.log('beep beep')
    }
  }
}
