console.log('解构默认值')
const cc = {
  kk: 1,
}
const { des = 'default value', kk } = cc

console.log(des, kk)
