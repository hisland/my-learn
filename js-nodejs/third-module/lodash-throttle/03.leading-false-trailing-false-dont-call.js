// import throttle from 'lodash-es/throttle'
const throttle = require('lodash/throttle')
console.log('throttle: ', throttle)

const throttleFoo = throttle(
  (val) => {
    console.log('foo', val)
  },
  500,
  {
    leading: false,
    trailing: false,
  }
)

for (let ii = 0; ii < 10; ii++) {
  throttleFoo(ii)
}

throttleFoo(-1)
throttleFoo(-2)

console.log(`{
  leading: false,
  trailing: false,
}, 直接不调用了`)
