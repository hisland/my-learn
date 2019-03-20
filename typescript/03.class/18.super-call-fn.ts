class Foo1 {
  name: string
  say() {
    console.log('lv1', this.name) // 3
  }
}
class Foo2 extends Foo1 {
  say() {
    console.log('before lv2', this.name) // 2
    super.say()
    console.log('after lv2', this.name) // 4
  }
}
class Foo3 extends Foo2 {
  say() {
    console.log('before lv3', this.name) // 1
    super.say()
    console.log('after lv3', this.name) // 5
  }
}

let kk1 = new Foo3()
kk1.say()

export const preventVSCodeError = 1
