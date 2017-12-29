const { MongoClient } = require('mongodb')
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  const db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  // Get the bulkWrite collection
  const col = db.collection('bulkWrite')

  let rs

  // 首先全部清空
  yield col.remove()

  // Insert a single document
  rs = yield col.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }])
  assert.equal(3, rs.insertedCount)

  // Insert multiple documents
  rs = yield col.find().toArray()
  console.log(1, rs)

  // Insert multiple documents
  rs = yield col.bulkWrite(
    [
      {
        insertOne: { document: { newOne: 1 } },
      },
      {
        updateOne: { filter: { a: 1 }, update: { b: 1 } },
      },
      {
        deleteOne: { filter: { a: 2 } },
      },
      {
        deleteOne: { filter: { newOne: 1 } },
      },
    ],
    {
      ordered: false, // default true
    }
  )
  console.log(rs)

  // Insert multiple documents
  rs = yield col.find().toArray()
  console.log(2, rs)

  db.close()
}).catch(function(err) {
  console.log(err.stack)
})
