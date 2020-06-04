// T extends U ? X : Y
// The type above means when T is assignable to U the type is X, otherwise the type is Y
{
  // "yes"
  type T01 = number extends unknown ? 'yes' : 'no'
  // "yes"
  type T02 = string extends unknown ? 'yes' : 'no'
  // "yes"
  type T03 = boolean extends unknown ? 'yes' : 'no'
  // "yes"
  type T04 = null extends unknown ? 'yes' : 'no'
  // "yes"
  type T05 = undefined extends unknown ? 'yes' : 'no'
  // "yes"
  type T06 = void extends unknown ? 'yes' : 'no'
  // "yes"
  type T07 = symbol extends unknown ? 'yes' : 'no'
  // "yes"
  type T08 = object extends unknown ? 'yes' : 'no'
  // "yes"
  type T09 = Function extends unknown ? 'yes' : 'no'
  // "yes"
  type T10 = any extends unknown ? 'yes' : 'no'
  // "yes"
  type T11 = unknown extends unknown ? 'yes' : 'no'
  // "yes"
  type T12 = never extends unknown ? 'yes' : 'no'
}

{
  // "no"
  type T01 = unknown extends number ? 'yes' : 'no'
  // "no"
  type T02 = unknown extends string ? 'yes' : 'no'
  // "no"
  type T03 = unknown extends boolean ? 'yes' : 'no'
  // "no"
  type T04 = unknown extends null ? 'yes' : 'no'
  // "no"
  type T05 = unknown extends undefined ? 'yes' : 'no'
  // "no"
  type T06 = unknown extends void ? 'yes' : 'no'
  // "no"
  type T07 = unknown extends symbol ? 'yes' : 'no'
  // "no"
  type T08 = unknown extends object ? 'yes' : 'no'
  // "no"
  type T09 = unknown extends Function ? 'yes' : 'no'
  // "yes"
  type T10 = unknown extends any ? 'yes' : 'no'
  // "yes"
  type T11 = unknown extends unknown ? 'yes' : 'no'
  // "no"
  type T12 = unknown extends never ? 'yes' : 'no'
}
