interface Hello {
  god: string // 就是普通的属性, 不用做什么标记
}

let aa1: Hello = {} // 缺少 god 属性
let aa2: Hello = { god: 5 } // god 属性 类型不对
let aa3: Hello = { god: '5' } // ok
let aa4: Hello = { god: '5', other: 'haha' } // 多余的属性不行

export const preventVSCodeError = 1
