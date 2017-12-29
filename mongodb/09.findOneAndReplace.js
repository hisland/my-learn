const { MongoClient } = require('mongodb')
const co = require('co')
const assert = require('assert')

co(function*() {
  const db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  const col = db.collection('findOneAndReplace')

  let rs

  // 首先全部清空
  yield col.remove()

  rs = yield col.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }])
  assert.equal(3, rs.insertedCount)

  rs = yield col.find().toArray()
  console.log(1, rs)

  rs = yield col.findOneAndReplace(
    { a: 1 },
    { $set: { b: 1 } } // 只有更新操作 update
  )

  rs = yield col.find().toArray()
  console.log(2, rs)

  rs = yield col.findOneAndReplace(
    { a: 2 },
    { xxxxx:1 } // 没有更新操作 replace
  )

  rs = yield col.find().toArray()
  console.log(3, rs)

  db.close()
}).catch(function(err) {
  console.log(err.stack)
})
