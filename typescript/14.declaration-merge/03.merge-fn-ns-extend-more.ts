function Foo(name: string) {
  return 'halo ' + name + Foo.suffix
}

// 同名ns 必须放在后面, 放前面直接报错
namespace Foo {
  export let suffix = ' !'
}

console.log(Foo)
console.log(Foo('bill'))

export const preventVSCodeError = 1
