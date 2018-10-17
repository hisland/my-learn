const redis = require('redis'), client = redis.createClient()

client.set('aa1', 'bb', function(err, msg) {
  console.log(err, msg)
})
client.get('aa1', function(err, reply) {
  console.log(err, reply)
})

client.set('aa2', 'bb', function(err, msg) {
  console.log(err, msg)
})
client.set('aa2', 'bb2', function(err, msg) {
  console.log(err, msg)
})

client.get('aa2', function(err, reply) {
  console.log(err, reply)
})
