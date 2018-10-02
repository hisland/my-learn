const list1 = ['some', 'list', 'value']

for (let kk of list1) {
  console.log(kk)
}

async function halo1() {
  await halo2()
}

async function halo2() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve('halo')
    }, 100)
  })
}
