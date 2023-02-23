// 跟之前的 Promise.defer 差不多

console.log('run 1')
function GenPromiseResolveReject() {
  let myResolve
  let myReject
  const myPromise = new Promise((resolve, reject) => {
    myResolve = resolve
    myReject = reject
  })
  return [myPromise, myResolve, myReject]
}

const [p1, r1] = GenPromiseResolveReject()
console.log('run 2')

p1.then((rs) => {
  console.log(rs)
  console.log('run 4')
})

setTimeout(() => {
  console.log('run 5')
  r1('resolve me 1')
  console.log('run 6')
}, 500)
setTimeout(() => {
  console.log('run 7')
  r1('resolve me 2')
  console.log('run 8')
}, 800)

console.log('run 3')
