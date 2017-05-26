async function aa(){
  console.log('in aa')

  let bbrs = await new Promise(function(resolve, reject){
    resolve('bbq')
  })
  console.log(bbrs)

  return 33;
}

console.log('pending: ', aa().then(function(rs){
  console.log('aa done: ', rs)
})) // 内部 await promise
