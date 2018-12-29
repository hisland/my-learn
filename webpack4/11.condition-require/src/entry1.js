console.log(3)

if (process.env.NODE_ENV === 'development') {
  const aa = require('./sub1.js')
  console.log(aa)
}
