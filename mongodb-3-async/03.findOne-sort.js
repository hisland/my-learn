const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
;(async function() {
  const url = 'mongodb://localhost:27017'
  const dbName = 'learn-mongodb-3'
  let client
  try {
    // Use connect method to connect to the Server
    client = await MongoClient.connect(url)
    const db = client.db(dbName)
    console.log('Connected correctly to server')

    const col = db.collection('findOne')
    let rs

    // 首先全部清空
    await col.remove()

    // Insert a single document
    rs = await col.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }])
    assert.equal(3, rs.insertedCount)

    // Insert multiple documents
    rs = await col
      .find({})
      .sort({ a: -1 })
      .limit(1)
      .toArray()
    console.log(1, rs)
  } catch (err) {
    console.log(err.stack)
  }

  if (client) {
    client.close()
  }
})()
