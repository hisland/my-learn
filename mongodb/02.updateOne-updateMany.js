const { MongoClient } = require('mongodb')
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  let db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  // Get the updates collection
  let col = db.collection('updates');

  let rs

  // 首先全部清空
  yield db.collection('updates').remove()

  // Insert a single document
  rs = yield col.insertMany([{a:1}, {a:2}, {a:2}]);
  assert.equal(3, rs.insertedCount);

  // Insert multiple documents
  rs = yield db.collection('updates').find().toArray()
  console.log(1, rs)

  // Update a single document
  rs = yield col.updateOne({a:1}, {$set: {b: 1}});
  assert.equal(1, rs.matchedCount);
  assert.equal(1, rs.modifiedCount);

  // Insert multiple documents
  rs = yield db.collection('updates').find().toArray()
  console.log(2, rs)

  // Update multiple documents
  rs = yield col.updateMany({a:2}, {$set: {b: 2}});
  assert.equal(2, rs.matchedCount);
  assert.equal(2, rs.modifiedCount);

  // Insert multiple documents
  rs = yield db.collection('updates').find().toArray()
  console.log(3, rs)

  // Upsert a single document 结果是 {a:3, b:3}, 如果找不到就插入
  rs = yield col.updateOne({a:3}, {$set: {b: 3}}, {
    upsert: true
  });
  assert.equal(0, rs.matchedCount);
  assert.equal(1, rs.upsertedCount);

  // Insert multiple documents
  rs = yield db.collection('updates').find().toArray()
  console.log(4, rs)

  db.close();
}).catch(function(err) {
  console.log(err.stack)
})
