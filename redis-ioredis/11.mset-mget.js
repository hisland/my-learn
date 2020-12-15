const Redis = require('ioredis')
const redis = new Redis()

;(async function () {
  // 一次设置多个值
  await redis.mset('foo11', 'bar1-aa', 'foo22', 'bar2-aa')
  // 一次读取多个值
  const rs = await redis.mget('foo11', 'foo22')
  console.log(22, rs)
  // 一次删除多个值
  await redis.del('foo11', 'foo22')
  await redis.quit()
  console.log(44)
})()
