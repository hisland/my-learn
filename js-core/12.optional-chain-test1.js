const obj = {
  aa: {
    bb: {
      cc: 123,
      ee: () => {
        return 'ee'
      },
    },
  },
}

console.log(obj.aa)
console.log(obj.xx)
console.log(obj.aa.god)

console.log(obj.xx?.ee) // 不确定 xx 是否有值, 用 ?. 读取 ee 不会报错
console.log(obj.aa.god?.some) // 不确定 god 是否有值, 用 ?. 读取 some 不会报错

console.log(obj.xx?.ee.big.yes) // 如果 xx 为 undefined, 后续操作都不起作用, 没有报错
// console.log(obj.aa?.ee.big.yes) // 如果 aa 有值, 后续操作都正常走, 此时 .big.yes 都会报错, 因为 ee 是 undefined
