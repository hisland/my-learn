// 就像普通js声明一样随便用, 不会报错
let aa1: any = 4
console.log('ok: ', aa1)
aa1 = 'god'
console.log('ok: ', aa1)
aa1 = true
console.log('ok: ', aa1)

// 不指定类型, 类型是 类型推断
// 查看 http://www.typescriptlang.org/Handbook#type-inference
let aa2 = 3 // 这种是类型推断, 不是any类型
console.log(aa2)
// aa2='god'; // 这里编译报错, 但是能生成js
// console.log(aa2);

let list1: any[] = [1, 'god', true, 'cc']
console.log(list1)
list1[1] = 1000
console.log(list1)

// any 和  Object 不一样
let bb1: any = 4
let bb2: Object = 4
console.log(bb1.toFixed(2)) // ok
// console.log(bb2.toFixed(2)) // error

export { aa1 }
