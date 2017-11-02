const { MongoClient } = require('mongodb')
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  let db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  // Get the removes collection
  let col = db.collection('removes');

  let rs

  // 首先全部清空
  yield db.collection('removes').remove()

  // Insert a single document
  rs = yield col.insertMany([{a:1}, {a:2}, {a:2}]);
  assert.equal(3, rs.insertedCount);

  // Insert multiple documents
  rs = yield db.collection('removes').find().toArray()
  console.log(1, rs)

  // Remove a single document
  rs = yield col.deleteOne({a:1});
  assert.equal(1, rs.deletedCount);

  // Insert multiple documents
  rs = yield db.collection('removes').find().toArray()
  console.log(2, rs)

  // Update multiple documents
  rs = yield col.deleteMany({a:2});
  assert.equal(2, rs.deletedCount);

  // Insert multiple documents
  rs = yield db.collection('removes').find().toArray()
  console.log(3, rs)

  db.close();
}).catch(function(err) {
  console.log(err.stack)
})
