class Octopus {
  readonly name: string
  readonly numberOfLegs: number = 8 // 只读属性必须在声明时或构造函数里被初始化
  constructor(theName: string) {
    this.name = theName // 只读属性必须在声明时或构造函数里被初始化
  }
}
let dad = new Octopus('Man with the 8 strong legs')
dad.name = 'Man with the 3-piece suit' // error! name is readonly.
