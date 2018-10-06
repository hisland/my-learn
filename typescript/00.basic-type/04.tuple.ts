// 对应位置对应类型

let aa1: [number] = [2] // 这种感觉就相当于数组
let aa2: [number, string] = [2, '3']
let aa3: [number, string, boolean] = [2, '3', true]

// 越界默认为联合类型

// aa1[3] = 'b' // error
aa2[3] = 'b' // union (number|string)
console.log(aa2)
