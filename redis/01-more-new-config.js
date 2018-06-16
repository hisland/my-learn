var Redis = require('ioredis')
var redis = new Redis({
  port: 6379, // Redis port
  host: '127.0.0.1', // Redis host
  db: 1,
})

redis.set('foo-in-db-1', 'bar')
redis.get('foo-in-db-1', function(err, result) {
  console.log(result)
})
