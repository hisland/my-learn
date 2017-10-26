const MongoClient = require('mongodb').MongoClient
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  let db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  // Get the findAndModify collection
  var col = db.collection('findAndModify');
  // Insert a single document
  var r = yield col.insert([{a:1}, {a:2}, {a:2}]);
  assert.equal(3, r.result.n);

  // Modify and return the modified document
  var r = yield col.findOneAndUpdate({a:1}, {$set: {b: 1}}, {
      returnOriginal: false
    , sort: [['a',1]]
    , upsert: true
  });
  assert.equal(1, r.value.b);

  // Remove and return a document
  var r = yield col.findOneAndDelete({a:2});
  assert.ok(r.value.b == null);
  db.close();
}).catch(function(err) {
  console.log(err.stack)
})
