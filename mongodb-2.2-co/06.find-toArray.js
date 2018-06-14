const { MongoClient } = require('mongodb')
const co = require('co')
const assert = require('assert')

co(function*() {
  const db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  const col = db.collection('find-toArray')

  let rs

  // 首先全部清空
  yield col.remove()

  rs = yield col.insertMany([
    { a: 1, b: 'bb' },
    { a: 2, c: 'cc' },
    { a: 2 },
    { a: 3, f: 'ff' },
    { a: 9 },
  ])
  assert.equal(5, rs.insertedCount)

  // Insert multiple documents
  rs = yield col.find().toArray()
  console.log('find all', rs)

  // Insert multiple documents
  rs = yield col.find({a: 2}).toArray()
  console.log('find a:2', rs)

  // inclusion
  rs = yield col.find({a: 2}, {c: 1}).toArray()
  console.log('find just get c', rs)

  // exclusion
  rs = yield col.find({a: 2}, {c: 0}).toArray()
  console.log('find omit c', rs)

  // exclusion
  rs = yield col.find({a: 2}, {_id: 0}).toArray()
  console.log('find omit _id', rs)

  // Projection cannot have a mix of inclusion and exclusion
  // 不能同时设置 include 和 exclude, 直接报错
  // rs = yield col.find({a: 2}, {a: 0, c: 1}).toArray()
  // console.log('find mix include 和 exclude error', rs)

  // range
  rs = yield col.find({a: {$gte: 3}}).toArray()
  console.log('find value range $gte:3', rs)

  db.close()
}).catch(function(err) {
  console.log(err.stack)
})
