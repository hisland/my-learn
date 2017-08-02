var aa = {val: {sub: 'hey'}}
var bb = {val: 1}
var cc = {val: 'cc'}

// 其实多个就是单个的循环版本
// 相当于循环依次合并到 aa
// Object.assign(aa, bb)
// Object.assign(aa, cc)
//
Object.assign(aa, bb, cc)

console.log(aa, bb, cc)

