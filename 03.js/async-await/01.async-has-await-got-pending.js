async function bb(){
  console.log('in bb')
  return 'bb';
}

async function aa(){
  console.log('in aa')

  let bbrs = await bb()
  console.log(bbrs)
  let bbrs2 = await bb()
  console.log(bbrs2)

  return 33;
}

console.log('pending: ', aa().then(function(rs){
  console.log('aa done: ', rs)
})) // 由于内部有 await, 此处返回的 pending 状态的 promise
