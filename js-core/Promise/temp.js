console.log('run 1')

function getValue() {
  return 'value'
}
function getPromiseResolve() {
  return new Promise((resolve, reject) => {
    resolve('promise resolve value')
  })
}
function getPromiseReject() {
  return new Promise((resolve, reject) => {
    reject('promise reject value')
  })
}
async function getAsync() {
  return 'async value'
}

;(async function () {
  const rs = await getValue()
  console.log('rs1: ', rs)
})()
;(async function () {
  const rs = await getPromiseResolve()
  console.log('rs2: ', rs)
})()
;(async function () {
  try {
    const rs = await getPromiseReject()
    console.log('rs3: ', rs)
  } catch (error) {
    console.log('reject3:', error)
  }
})()
;(async function () {
  const rs = await getAsync()
  console.log('rs4: ', rs)
})()

console.log('run 8')
