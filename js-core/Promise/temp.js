function getok() {
  return new Promise(function (resolve, reject) {
    resolve('val')
  })
}
function geterr() {
  return new Promise(function (resolve, reject) {
    reject('val')
  })
}

getok()
  .then((rs) => {
    console.log('then1', rs)
  })
  .catch((err) => {
    console.log('err1', err)
  })
geterr()
  .then((rs) => {
    console.log('then2', rs)
  })
  .catch((err) => {
    console.log('err2', err)
  })

getok()
  .catch((err) => {
    console.log('err1', err)
  })
  .then((rs) => {
    console.log('then1', rs)
  })
geterr()
  .catch((err) => {
    console.log('err2', err)
    return 'thing by catch'
  })
  .then((rs) => {
    console.log('then2', rs)
  })
