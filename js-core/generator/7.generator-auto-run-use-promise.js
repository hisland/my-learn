'use strict'
const count = 1
function log(...vv) {
  console.log(count++, vv)
}

function some(str, time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(str)
    }, time)
  })
}
function* g2() {
  const a1 = yield some('aaa', 300)
  const a2 = yield some('bbb', 500)

  console.log(a1)
  console.log(a2)
  console.log('gen end')
}

log('aa')
// auto runner start
const it = g2()
function step(nextF) {
  const next = nextF()
  if (!next.done) {
    next.value.then(function (v) {
      step(function () {
        return it.next(v)
      })
    })
  }
}
step(function () {
  return it.next()
})
// auto runner end
log('end')
