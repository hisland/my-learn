console.log('解构对象')
let obj = {
  dd: 'd: god',
  ee: 'e: help',
  ff: 'f: me',
}

let { dd, ee, ff } = obj // 将对应位置的值 解构到相应的变量

console.log(obj)
console.log(dd, ee, ff)
