class Foo {
  constructor() {
    console.log('new.target', new.target, new.target === Foo)
  }
}

class Tom extends Foo {
  constructor() {
    super()
  }
}

{
  let aa = new Foo()
  console.log(aa)
}

{
  let aa = new Tom()
  console.log(aa)
}
