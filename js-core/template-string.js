const god = 'me'

console.log(`
原样输出
oh god is ${god},
  next line:

`) // 支持直接多行

function tag1(tpl, aa, bb, cc) {
  // 插值依次传入
  console.log(arguments)
  console.log(tpl, aa, bb, cc)
  return 33
}
function tag2(tpl, aa, bb, cc) {
  // 插值依次传入
  // console.log(arguments)
  console.log('tpl:', tpl)
  console.log('tpl.raw:', tpl.raw)
  return 33
}

const say = 'say'
const halo = 'halo'
const obj = { tt: 'may' }

// 模板 tag
const bb1 = tag1`a god, ${say} 1 ${halo}, 2 ${obj.tt}`
console.log('return from tag: ', bb1)
console.log(``)
const bb2 = tag2`a god, \n ${say} 1 ${halo}, 2 ${obj.tt}`
console.log('return from tag: ', bb2)

console.log(`----------`)
// console.log(`oh god is ${god}, not is ${not}`) // god 在相应作用域有值被解析了, not报错

function passthru1(literals) {
  let result = ''
  let i = 0

  while (i < literals.length) {
    result += literals[i++]
    if (i < arguments.length) {
      result += arguments[i]
    }
  }

  return result
}
function passthru2(literals, ...values) {
  let output = ''
  let index
  for (index = 0; index < values.length; index++) {
    output += literals[index] + values[index]
  }

  output += literals[index]
  return output
}
