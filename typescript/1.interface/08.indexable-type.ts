interface StringArray{
  [index: number]: string
}

let aa1: StringArray
aa1 = ['aa', 'bb']
console.log(aa1)

interface StringMap{
  [index: string]: string
}

let aa2: StringMap
aa2 = {
  '0': 'aa',
  '1': 'bb'
}
console.log(aa2)


interface MixStringNumber{
  [index: number]: string // 返回值必须是下面的子类型
  [index: string]: string
}

let aa3: MixStringNumber
aa3 = {
  '0': 'aa',
  '1': 'bb'
}
console.log(aa3)



interface HandleDict{
  [index: string]: string, // 这样可以限定其它的key为相同类型(或者子类型?)
  name: string
}

let aa4: HandleDict
aa4 = {
  'name': 'aa',
  '1': 'bb'
}
console.log(aa4)


interface ReadonlyDict{
  readonly [index: number]: string, // 限制只读
}

let aa5: ReadonlyDict
aa5 = ['bb']
console.log(aa5)
aa5[7] = 'll' // error
