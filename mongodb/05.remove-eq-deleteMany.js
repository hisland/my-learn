const { MongoClient } = require('mongodb')
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  let db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  // Get the removeAll collection
  let col = db.collection('removeAll');

  let rs

  // 首先全部清空
  yield db.collection('removeAll').remove() // v2.6语法

  // Insert a single document
  rs = yield col.insertMany([{a:1}, {a:2}, {a:2}]);
  assert.equal(3, rs.insertedCount);

  // Insert multiple documents
  rs = yield db.collection('removeAll').find().toArray()
  console.log(1, rs)

  // Remove a single document
  rs = yield col.deleteMany(); // v3.2语法

  // Insert multiple documents
  rs = yield db.collection('removeAll').find().toArray()
  console.log(2, rs)

  db.close();
}).catch(function(err) {
  console.log(err.stack)
})
