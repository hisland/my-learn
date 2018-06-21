const Redis = require('ioredis')
const redis = new Redis({
  port: 6379, // Redis port
  host: '127.0.0.1', // Redis host
  db: 3,
})

~(async function() {
  console.time('start')
  const pipeline = redis.pipeline()
  for (let ii = 0; ii < 3000; ii++) {
    pipeline.set(`foo-${ii}`, 'god')
  }
  await pipeline.exec(function(err, results) {
    console.log('results: ', results.length)
  })
  console.timeEnd('start')

  redis.quit()
})()

// ~(async function() {
//   console.time('start')
//   const pipeline = redis.multi()
//   for (let ii = 0; ii < 1000; ii++) {
//     pipeline.set(`foo-${ii}`, 'god')
//   }
//   await pipeline.exec(function(err, results) {
//     console.log('results: ', results.length)
//   })
//   console.timeEnd('start')
// })()
