class Foo {
  constructor() {
    this.god = 22
  }
}

class Bar extends Foo {
  constructor() {
    super()
    this.god = 1 // 覆盖了父组件的 god 值
  }
}

{
  let aa = new Bar()
  console.log(aa)
}

{
  let aa = new Foo()
  console.log(aa)
}
