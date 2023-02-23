console.log('run 1')

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('run 2')
    resolve('p1')
    console.log('run 3')
  }, 300)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('run 4')
    resolve('p2')
    console.log('run 5')
  }, 500)
})
Promise.all([promise1, promise2]).then((values) => {
  console.log('run 6')
  console.log(values)
  console.log('run 7')
})

console.log('run 8')
