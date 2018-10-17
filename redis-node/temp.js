const redis = require('redis'), client = redis.createClient()

client.keys('*', function(err, msg) {
  console.log(err, msg)
})
