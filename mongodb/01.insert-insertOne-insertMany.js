const MongoClient = require('mongodb').MongoClient
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  let db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  // Insert a single document
  let r = yield db.collection('inserts').insertOne({ a: 1 })
  assert.equal(1, r.insertedCount)

  // Insert multiple documents
  let r = yield db.collection('inserts').insertMany([{ a: 2 }, { a: 3 }])
  assert.equal(2, r.insertedCount)

  // Close connection
  db.close()
}).catch(function(err) {
  console.log(err.stack)
})
