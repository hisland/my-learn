const Redis = require('ioredis')
const redis = new Redis()

;(async function () {
  await redis.set('foo', 'bar')
  const rs = await redis.get('foo', function (err, result) {
    console.log(11, result)
  })
  console.log(22, rs)
  await redis.quit()
  console.log(44)
})()
