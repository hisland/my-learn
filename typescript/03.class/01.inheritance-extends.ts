class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move(meters: number = 0) {
    console.log(this.name, ' moved ' + meters + 'm.')
  }
}

class Snake extends Animal {
  move(meters = 5) {
    console.log('Snake:')
    super.move(meters)
  }
}

class Horse extends Animal {
  move(meters = 45) {
    console.log('Horse:')
    super.move(meters)
  }
}

let ss = new Snake('kiki')

let aa = new Horse('bobo')

ss.move()
aa.move()

export const preventVSCodeError = 1
