interface ClockStatic {
  new (hour: number, minute: number)
}

class Clock {
  currentTime: Date
  constructor(h: number, m: number) {}
}

var cs: ClockStatic = Clock // 接口检查类的 constructor
var newClock: Clock = new cs(7, 30)
