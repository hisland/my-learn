const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

(async function() {
  const url = 'mongodb://localhost:27017';
  const dbName = 'learn-mongodb-3';
  let client;
  try {
    // Use connect method to connect to the Server
    client = await MongoClient.connect(url);
    const db = client.db(dbName);
    console.log('Connected correctly to server')

    const col = db.collection('insertOne-Many');
    let rs

    // 首先全部清空
    await col.remove()

    // Insert a single document
    rs = await col.insertOne({
      a: 1
    })
    assert.equal(1, rs.insertedCount)

    // Insert multiple documents
    rs = await col.find().toArray()
    console.log(1, rs)

    // Insert multiple documents
    rs = await col.insertMany([{
      a: 2
    }, {
      a: 3
    }])
    assert.equal(2, rs.insertedCount)

    // Insert multiple documents
    rs = await col.find().toArray()
    console.log(2, rs)

  } catch (err) {
    console.log(err.stack);
  }

  if (client) {
    client.close();
  }
})()
