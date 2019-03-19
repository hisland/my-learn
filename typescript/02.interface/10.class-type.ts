class Clock3 {
  currentTime: Date
  constructor(h: number, m: number) {
    this.currentTime = new Date()
  }
}

let newClock: Clock3 = new Clock3(7, 30) // Clock3, cs 使用效果一样
console.log(newClock)

export { Clock3 }
