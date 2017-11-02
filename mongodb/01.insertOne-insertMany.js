const { MongoClient } = require('mongodb')
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  let db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  let rs

  // 首先全部清空
  yield db.collection('inserts').remove()

  // Insert a single document
  rs = yield db.collection('inserts').insertOne({ a: 1 })
  assert.equal(1, rs.insertedCount)

  // Insert multiple documents
  rs = yield db.collection('inserts').find().toArray()
  console.log(1, rs)

  // Insert multiple documents
  rs = yield db.collection('inserts').insertMany([{ a: 2 }, { a: 3 }])
  assert.equal(2, rs.insertedCount)

  // Insert multiple documents
  rs = yield db.collection('inserts').find().toArray()
  console.log(2, rs)

  // Close connection
  db.close()
}).catch(function(err) {
  console.log(err.stack)
})
