let aa1: { god: string } = {} // 缺少 god 属性
let aa2: { god: string } = { god: 5 } // god 属性 类型不对
let aa3: { god: string } = { god: '5' } // ok
let aa4: { god: string } = { god: '5', other: 'haha' } // 对象字面量: 多余的属性不行

let aa5 = { god: '5', other: 'haha' } // 自动推断
aa3 = aa5 // 类型兼容赋值

export const preventVSCodeError = 1
