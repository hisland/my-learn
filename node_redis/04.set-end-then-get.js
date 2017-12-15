const redis = require('redis'), client = redis.createClient()

client.set('aa1', 'bb', function(err, msg) {
  console.log(err, msg)

  client.end(true)
})


client.get('aa1', function(err, msg) {
  console.log(err, msg)
})
