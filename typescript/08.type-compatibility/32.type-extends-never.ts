// T extends U ? X : Y
// The type above means when T is assignable to U the type is X, otherwise the type is Y
{
  // "no"
  type T01 = number extends never ? 'yes' : 'no'
  // "no"
  type T02 = string extends never ? 'yes' : 'no'
  // "no"
  type T03 = boolean extends never ? 'yes' : 'no'
  // "no"
  type T04 = null extends never ? 'yes' : 'no'
  // "no"
  type T05 = undefined extends never ? 'yes' : 'no'
  // "no"
  type T06 = void extends never ? 'yes' : 'no'
  // "no"
  type T07 = symbol extends never ? 'yes' : 'no'
  // "no"
  type T08 = object extends never ? 'yes' : 'no'
  // "no"
  type T09 = Function extends never ? 'yes' : 'no'
  // 'yes' : 'no'
  type T10 = any extends never ? 'yes' : 'no'
  // "no"
  type T11 = unknown extends never ? 'yes' : 'no'
  // "yes"
  type T12 = never extends never ? 'yes' : 'no'
}

{
  // "yes"
  type T01 = never extends number ? 'yes' : 'no'
  // "yes"
  type T02 = never extends string ? 'yes' : 'no'
  // "yes"
  type T03 = never extends boolean ? 'yes' : 'no'
  // "yes"
  type T04 = never extends null ? 'yes' : 'no'
  // "yes"
  type T05 = never extends undefined ? 'yes' : 'no'
  // "yes"
  type T06 = never extends void ? 'yes' : 'no'
  // "yes"
  type T07 = never extends symbol ? 'yes' : 'no'
  // "yes"
  type T08 = never extends object ? 'yes' : 'no'
  // "yes"
  type T09 = never extends Function ? 'yes' : 'no'
  // "yes"
  type T10 = never extends any ? 'yes' : 'no'
  // "yes"
  type T11 = never extends unknown ? 'yes' : 'no'
  // "yes"
  type T12 = never extends never ? 'yes' : 'no'
}
