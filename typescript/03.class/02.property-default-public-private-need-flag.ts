class Animal {
  name1: string //default is public
  private name2: string //set to private
  constructor(name: string) {
    this.name1 = name
    this.name2 = name + '2'
  }
  public move(meters: number = 0) {
    // 也可以显示指定
    console.log(this.name1, ' moved ' + meters + 'm.')
    console.log(this.name2, ' moved ' + meters + 'm.')
  }
}

let ss = new Animal('kiki')
ss.move()

export const preventVSCodeError = 1
