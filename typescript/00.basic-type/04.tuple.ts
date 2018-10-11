// 对应位置对应类型

let aa1: [number] = [2] // 这种感觉就相当于数组
// aa1[3] = 'b' // error

let aa2: [number, string] = [2, 'a']
// aa2[0] = 'b' // error
aa2[1] = 'b' // ok
aa2[3] = 'b' // error: out-of-bounds in tuple
console.log(aa2)


let aa3: [number, string, boolean] = [2, 'a', true]
aa3[5] = 'b' // error: out-of-bounds in tuple
console.log(aa3)

// 越界默认为联合类型 union-type
