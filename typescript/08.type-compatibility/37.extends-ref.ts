export const preventVSCodeError = 1

{
  interface Ref<T = any> {
    value: T
  }
  // "yes"
  type T01 = Ref<number> extends Ref ? 'yes' : 'no'
  // "yes"
  type T02 = Ref<string> extends Ref ? 'yes' : 'no'
  // "yes"
  type T03 = Ref<boolean> extends Ref ? 'yes' : 'no'
  // "yes"
  type T04 = Ref<null> extends Ref ? 'yes' : 'no'
  // "yes"
  type T05 = Ref<undefined> extends Ref ? 'yes' : 'no'
  // "yes"
  type T06 = Ref<void> extends Ref ? 'yes' : 'no'
  // "yes"
  type T07 = Ref<symbol> extends Ref ? 'yes' : 'no'
  // "yes"
  type T08 = Ref<object> extends Ref ? 'yes' : 'no'
  // "yes"
  type T09 = Ref<Function> extends Ref ? 'yes' : 'no'
  // "yes"
  type T10 = Ref<any> extends Ref ? 'yes' : 'no'
  // "yes"
  type T11 = Ref<unknown> extends Ref ? 'yes' : 'no'
  // "yes"
  type T12 = Ref<never> extends Ref ? 'yes' : 'no'
}

{
  interface Ref1<T = any> {
    value: T
  }
  interface Ref2<T = any> {
    name: T // 这里首先 结构 就不一样了
  }
  // "no"
  type T01 = Ref2<number> extends Ref1 ? 'yes' : 'no'
  // "no"
  type T02 = Ref2<string> extends Ref1 ? 'yes' : 'no'
  // "no"
  type T03 = Ref2<boolean> extends Ref1 ? 'yes' : 'no'
  // "no"
  type T04 = Ref2<null> extends Ref1 ? 'yes' : 'no'
  // "no"
  type T05 = Ref2<undefined> extends Ref1 ? 'yes' : 'no'
  // "no"
  type T06 = Ref2<void> extends Ref1 ? 'yes' : 'no'
  // "no"
  type T07 = Ref2<symbol> extends Ref1 ? 'yes' : 'no'
  // "no"
  type T08 = Ref2<object> extends Ref1 ? 'yes' : 'no'
  // "no"
  type T09 = Ref2<Function> extends Ref1 ? 'yes' : 'no'
  // "no"
  type T10 = Ref2<any> extends Ref1 ? 'yes' : 'no'
  // "no"
  type T11 = Ref2<unknown> extends Ref1 ? 'yes' : 'no'
  // "no"
  type T12 = Ref2<never> extends Ref1 ? 'yes' : 'no'
}
