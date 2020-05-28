class Foo1 {
  name: string = 'name foo'
  constructor() {
    console.log('ctor lv1') // 3
  }
  say() {
    console.log('lv1', this.name) // 3
  }
}
class Foo2 extends Foo1 {
  constructor() {
    // this.name = 'what' // super() 之前不能用 this 关键字
    console.log('ctor before lv2') // 3
    super()
    console.log('ctor after lv2') // 3
  }
  say() {
    console.log('before lv2', this.name) // 2
    super.say()
    console.log('after lv2', this.name) // 4
  }
}
class Foo3 extends Foo2 {
  constructor() {
    console.log('ctor before lv3') // 3
    super()
    console.log('ctor after lv3') // 3
  }
  say() {
    console.log('before lv3', this.name) // 1
    super.say()
    // super.super.say() // 不能跳过 Foo2 直接调用 Foo1.say, 没有这种用法, 只能调用上一层
    console.log('after lv3', this.name) // 5
  }
}

let kk1 = new Foo3()
console.log('--------------------------------')
kk1.say()

// super() 是调用父级 constructor
// super.xx() 是调用父级 xx 方法

export const preventVSCodeError = 1
