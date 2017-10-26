const MongoClient = require('mongodb').MongoClient
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  let db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  // Get the removes collection
  let col = db.collection('removes');
  // Insert a single document
  let rs1 = yield col.insertMany([{a:1}, {a:2}, {a:2}]);
  assert.equal(3, rs1.insertedCount);

  // Remove a single document
  let rs2 = yield col.deleteOne({a:1});
  assert.equal(1, rs2.deletedCount);

  // Update multiple documents
  let rs3 = yield col.deleteMany({a:2});
  assert.equal(2, rs3.deletedCount);
  db.close();
}).catch(function(err) {
  console.log(err.stack)
})
