const Redis = require('ioredis')
const redis = new Redis({
  db: 1,
})
;(async function() {
  redis.set('foo', 'bar')
  const rs1 = await redis.get('foo')
  console.log(rs1)
})()
