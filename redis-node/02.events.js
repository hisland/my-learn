const redis = require('redis'), client = redis.createClient()

client.on('ready', function(err) {
  console.log('ready:  ' + err)
})

client.on('error', function(err) {
  console.log('Error:  ' + err)
})

client.on('connect', function(err) {
  console.log('connect:  ' + err)
})

client.on('reconnecting', function(err) {
  console.log('reconnecting:  ' + err)
})

client.on('end', function(err) {
  console.log('end:  ' + err)
})

client.on('warning', function(err) {
  console.log('warning:  ' + err)
})

client.on('idle', function(err) {
  console.log('idle:  ' + err)
})
