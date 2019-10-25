interface ClockInterface {
  currentTime: Date // 普通属性指的都是instance side的
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) {}
}

interface ClockInterface2 {
  new (hour: number, minute: number) // 构造函数属性static side
}

class Clock2 implements ClockInterface2 {
  // 这样是要实现 ClockInterface2, 但是不行  构造函数属性static side
  currentTime: Date
  constructor(h: number, m: number) {}
}

interface ClockStatic {
  new (hour: number, minute: number)
}

class Clock3 {
  currentTime: Date
  constructor(h: number, m: number) {}
}

var cs: ClockStatic = Clock3 // 这样才可以, 让cs表示一个类
var newClock = new cs(7, 30)
var newClock = new Clock3(7, 30) // Clock3, cs 使用效果一样

export const preventVSCodeError = 1
