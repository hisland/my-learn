const { MongoClient } = require('mongodb')
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  let db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  // Get the findAndModify collection
  var col = db.collection('testConnect')

  console.log(col)

  db.close()
}).catch(function(err) {
  console.log(err.stack)
})
