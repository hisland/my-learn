const Redis = require('ioredis')
const redis = new Redis()

redis.set('foo', 'bar');
redis.get('foo', function (err, result) {
  console.log(result);
});
