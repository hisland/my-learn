class Foo {
  foo: Foo.InterBar
}

// 同名ns 必须放在后面, 放前面直接报错
namespace Foo {
  export class InterBar {} // 内部类
}

console.log(Foo)

export const preventVSCodeError = 1
