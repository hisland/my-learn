class Animal2 {
  static foo = {
    a: 1,
    b: 2,
  }
  say(str) {
    console.log(str, Animal2.foo.a, Animal2.foo.b)
  }
}

let aa2 = new Animal2()
aa2.say('halo1')

Animal2.foo = { a: 10, b: 20 } // 运行时修改, 但是类型必须匹配
aa2.say('halo2')

export { Animal2 }
