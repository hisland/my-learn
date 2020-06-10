;(async function () {
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        ii: 0,
        next() {
          if (this.ii < 3) {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve({ value: this.ii++, done: false })
              }, 300)
            })
          }

          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({ done: true, value: null })
            }, 500)
          })
        },
      }
    },
  }

  console.time('async')
  for await (let num of asyncIterable) {
    console.log(num)
  }
  console.timeEnd('async') // 300 * 3 + 500 = 1400ms

  const normalIterable = {
    [Symbol.iterator]() {
      return {
        ii: 0,
        next() {
          if (this.ii < 3) {
            return { value: this.ii++, done: false }
          }

          return { done: true, value: null }
        },
      }
    },
  }
  for (let num of normalIterable) {
    console.log(num)
  }
})()

// 下面这个示例并不正确
// 这个 list 创建的时候, 3 个 promise 便已经同时开始计时
// 并不是我们想要的, 一个一个地开始
// const list = [
//   new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       resolve('11')
//     }, 1000)
//   }),
//   new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       resolve('22')
//     }, 300)
//   }),
//   new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       resolve('33')
//     }, 800)
//   }),
// ]

// ;(async function() {
//   console.log('start')
//   console.time('aa')
//   // 所以这里很奇怪, 1000ms 后, 3个值同时出现了
//   for await (const value of list) {
//     console.log(value)
//   }
//   console.timeEnd('aa')
// })()
