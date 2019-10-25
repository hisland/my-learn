let aa1: { god: string } = {} // 缺少 god 属性
let aa2: { god: string } = { god: 5 } // god 属性 类型不对
let aa3: { god: string } = { god: '5' } // ok
let aa4: { god: string } = { god: '5', other: 'haha' } // 多余的属性不行

export const preventVSCodeError = 1
