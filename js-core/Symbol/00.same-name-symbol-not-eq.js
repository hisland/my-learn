
var ss1 = Symbol('abc')
console.log(ss1)

var ss2 = Symbol('abc')
console.log(ss2)

console.log('ss1 === ss2: ', ss1 === ss2)
console.log('新建多个 Symbol 互相不冲突')
