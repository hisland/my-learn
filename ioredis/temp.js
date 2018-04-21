const Redis = require('ioredis')
const redis = new Redis({
  db: 1,
})
;(async function() {
  redis.sadd('foo1', 1,2,3)
  const rs1 = await redis.get('foo1')
  console.log(rs1)
})()
