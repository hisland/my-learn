// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html
// 这里有添加说明
// 类型表达式能得到具体那个属性的类型

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

{
  let ss1: Person['name'] = 'sss'
  console.log(ss1)
}

{
  let ss1: Person['age'] = 22
  console.log(ss1)
}

{
  let ss1: Person['height'] = 33
  console.log(ss1)
}

{
  let ss1: Person['work'] = {
    addr: 'yes',
    title: 't',
    money: 100,
  }
  console.log(ss1)
}

{
  let ss1: Person['work']['addr'] = 'ss'
  console.log(ss1)
}

export const preventVSCodeError = 1
