interface ClockStatic {
  new (hour: number, minute: number)
}

class Clock {
  currentTime: Date
  constructor(public h: number, public m: number) {}
}

const cs: ClockStatic = Clock // 接口检查类的 constructor
const newClock: Clock = new cs(7, 30)
console.log(newClock)

export { ClockStatic }
