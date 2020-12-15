const Redis = require('ioredis')
const redis = new Redis()

console.log(11, redis.set('foo', 'bar'))
console.log(
  22,
  redis.get('foo', function (err, result) {
    console.log(result)
  })
)

console.log(33, redis.quit())
console.log(44)
