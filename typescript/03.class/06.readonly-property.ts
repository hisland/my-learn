class Octopus {
  readonly name: string
  readonly numberOfLegs: number = 8 // 只读属性 必须在声明时初始化
  constructor(theName: string) {
    this.name = theName // 或构造函数里被初始化, 只有这 2 种方法
  }
}
let dad = new Octopus('Man with the 8 strong legs')
dad.name = 'Man with the 3-piece suit' // error! name is readonly.

export const preventVSCodeError = 1
