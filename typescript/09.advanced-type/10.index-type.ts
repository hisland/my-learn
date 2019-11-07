function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n])
}

interface Person {
  name: string
  age: number
}
let person: Person = {
  name: 'Jarid',
  age: 35,
}
let strings: string[] = pluck(person, ['name']) // ok, string[]
let nums: number[] = pluck(person, ['age']) // ok, number[]

let personProps1: keyof Person // 自动得到 'name' | 'age', 接口变化会自动增加
let personProps2: 'name' | 'age' // 'name' | 'age', 写死了, 接口变化要手工增加

interface Dictionary<T> {
  [key: string]: T
}
let keys: keyof Dictionary<number> // index signature 必须是 string | number
let value: Dictionary<number>['foo'] // number

export const preventVSCodeError = 1
