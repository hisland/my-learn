const MongoClient = require('mongodb').MongoClient
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  let db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  // Get the updates collection
  let col = db.collection('updates');
  // Insert a single document
  let rs1 = yield col.insertMany([{a:1}, {a:2}, {a:2}]);
  assert.equal(3, rs1.insertedCount);

  // Update a single document
  let rs2 = yield col.updateOne({a:1}, {$set: {b: 1}});
  assert.equal(1, rs2.matchedCount);
  assert.equal(1, rs2.modifiedCount);

  // Update multiple documents
  let rs3 = yield col.updateMany({a:2}, {$set: {b: 2}});
  assert.equal(2, rs3.matchedCount);
  assert.equal(2, rs3.modifiedCount);

  // Upsert a single document 结果是 {a:3, b:3}
  let rs4 = yield col.updateOne({a:3}, {$set: {b: 3}}, {
    upsert: true
  });
  assert.equal(0, rs4.matchedCount);
  assert.equal(1, rs4.upsertedCount);
  db.close();
}).catch(function(err) {
  console.log(err.stack)
})
