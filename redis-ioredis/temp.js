const Redis = require('ioredis')
const redis = new Redis({
  port: 6379, // Redis port
  host: '127.0.0.1', // Redis host
  db: 3,
})

~(async function() {
  console.time('start')

  const obj = {}
  for (let ii = 0; ii < 1000; ii++) {
    obj[`foo-${ii}`] = 'god'
  }

  console.timeEnd('start')

  redis.quit()
})()
