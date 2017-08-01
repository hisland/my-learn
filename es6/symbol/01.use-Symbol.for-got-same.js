
var ss1 = Symbol.for('abc')
console.log(ss1)

var ss2 = Symbol.for('abc')
console.log(ss2)

console.log('ss1 === ss2: ', ss1 === ss2)
console.log('Symbol.for 同名的获取的是同一个对象')
