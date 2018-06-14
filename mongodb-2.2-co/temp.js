const { MongoClient } = require('mongodb')
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  const db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  const col = db.collection('insert-undefined-got-null')

  // 首先全部清空
  yield col.remove()

  const rs1 = yield col.insertMany([{a: 1, b: 2, c: undefined, d: undefined}])
  // Insert multiple documents
  const rs2 = yield col.find().toArray()
  console.log(2, rs2)

  db.close()
}).catch(function(err) {
  console.log(err.stack)
})
