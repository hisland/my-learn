// T extends U ? X : Y
// The type above means when T is assignable to U the type is X, otherwise the type is Y
{
  // "yes"
  type T01 = number extends any ? 'yes' : 'no'
  // "yes"
  type T02 = string extends any ? 'yes' : 'no'
  // "yes"
  type T03 = boolean extends any ? 'yes' : 'no'
  // "yes"
  type T04 = null extends any ? 'yes' : 'no'
  // "yes"
  type T05 = undefined extends any ? 'yes' : 'no'
  // "yes"
  type T06 = void extends any ? 'yes' : 'no'
  // "yes"
  type T07 = symbol extends any ? 'yes' : 'no'
  // "yes"
  type T08 = object extends any ? 'yes' : 'no'
  // "yes"
  type T09 = Function extends any ? 'yes' : 'no'
  // "yes"
  type T10 = any extends any ? 'yes' : 'no'
  // "yes"
  type T11 = unknown extends any ? 'yes' : 'no'
  // "yes"
  type T12 = never extends any ? 'yes' : 'no'
}

{
  // "yes" | "no"
  type T01 = any extends number ? 'yes' : 'no'
  // "yes" | "no"
  type T02 = any extends string ? 'yes' : 'no'
  // "yes" | "no"
  type T03 = any extends boolean ? 'yes' : 'no'
  // "yes" | "no"
  type T04 = any extends null ? 'yes' : 'no'
  // "yes" | "no"
  type T05 = any extends undefined ? 'yes' : 'no'
  // "yes" | "no"
  type T06 = any extends void ? 'yes' : 'no'
  // "yes" | "no"
  type T07 = any extends symbol ? 'yes' : 'no'
  // "yes" | "no"
  type T08 = any extends object ? 'yes' : 'no'
  // "yes" | "no"
  type T09 = any extends Function ? 'yes' : 'no'
  // "yes"
  type T10 = any extends any ? 'yes' : 'no'
  // "yes"
  type T11 = any extends unknown ? 'yes' : 'no'
  // "yes" | "no"
  type T12 = any extends never ? 'yes' : 'no'
}
