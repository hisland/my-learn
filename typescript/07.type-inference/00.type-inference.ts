// 类型可以自动推断

let aa1 = 'hey' // string
let aa2 = 3 // number
let aa3 = true // boolean

let aa4 = [0, 'aa'] // (number | string)[] 根据内容推断的 union 类型

let input1 = [1, 2] // number[]
let input2 = {} // {} 空对象, 不能添加属性, 没什么用吧

export const preventVSCodeError = 1
