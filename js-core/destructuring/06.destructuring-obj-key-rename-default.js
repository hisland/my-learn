console.log('解构默认值')

const cc = {
  kk: 1,
}
const { des = 'default value', kk: newVal, noExist: newVal2 = 33 } = cc
console.log('des: ', des)
// console.log('kk: ', kk)
console.log('newVal: ', newVal)
console.log('newVal2: ', newVal2) // 重命名并有默认值
