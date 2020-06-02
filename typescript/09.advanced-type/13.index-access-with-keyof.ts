interface Person {
  name: string
  age: number
  height: number
  work: Work
}

interface Work {
  addr: string
  title: string
  money: number
}

type Props = keyof Person // "name" | "age" | "height" | "work"

// "name" | "age" | "height" | "work"
// 这 3 个属性的类型 union 之后即是
// string | number | Work
let ss1: Person[Props] = 'name'
console.log(ss1)
ss1 = 33
console.log(ss1)
ss1 = {
  addr: 'yes',
  title: 't',
  money: 100,
}
console.log(ss1)

export const preventVSCodeError = 1
