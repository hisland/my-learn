class Clock3 {
  currentTime: Date
  constructor(h: number, m: number) {
    this.currentTime = new Date()
  }
}

let newClock: Clock3 = new Clock3(7, 30)
console.log(newClock)

export const preventVSCodeError = 1
