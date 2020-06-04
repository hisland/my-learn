// T extends U ? X : Y
// The type above means when T is assignable to U the type is X, otherwise the type is Y
{
  // "no"
  type T01 = number extends object ? 'yes' : 'no'
  // "no"
  type T02 = string extends object ? 'yes' : 'no'
  // "no"
  type T03 = boolean extends object ? 'yes' : 'no'
  // "no"
  type T04 = null extends object ? 'yes' : 'no'
  // "no"
  type T05 = undefined extends object ? 'yes' : 'no'
  // "no"
  type T06 = void extends object ? 'yes' : 'no'
  // "no"
  type T07 = symbol extends object ? 'yes' : 'no'
  // "yes"
  type T08 = object extends object ? 'yes' : 'no'
  // "yes"
  type T09 = Function extends object ? 'yes' : 'no'
  // 'yes' : 'no'
  type T10 = any extends object ? 'yes' : 'no'
  // "no"
  type T11 = unknown extends object ? 'yes' : 'no'
  // "yes"
  type T12 = never extends object ? 'yes' : 'no'
}

{
  // "no"
  type T01 = object extends number ? 'yes' : 'no'
  // "no"
  type T02 = object extends string ? 'yes' : 'no'
  // "no"
  type T03 = object extends boolean ? 'yes' : 'no'
  // "no"
  type T04 = object extends null ? 'yes' : 'no'
  // "no"
  type T05 = object extends undefined ? 'yes' : 'no'
  // "no"
  type T06 = object extends void ? 'yes' : 'no'
  // "no"
  type T07 = object extends symbol ? 'yes' : 'no'
  // "yes"
  type T08 = object extends object ? 'yes' : 'no'
  // "no"
  type T09 = object extends Function ? 'yes' : 'no'
  // "yes"
  type T10 = object extends any ? 'yes' : 'no'
  // "yes"
  type T11 = object extends unknown ? 'yes' : 'no'
  // "no"
  type T12 = object extends never ? 'yes' : 'no'
}
