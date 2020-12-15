const Redis = require('ioredis')
const redis = new Redis({
  port: 6379, // Redis port
  host: '127.0.0.1', // Redis host
  db: 0,
})

redis.set('foo', Buffer.from('buff'))
redis.getBuffer('foo', function (err, result) {
  console.log(typeof result, result)
})

redis.quit()
