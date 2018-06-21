const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
;(async function() {
  const url = 'mongodb://localhost:27017'
  const dbName = 'learn-mongodb-4'
  let client
  try {
    // Use connect method to connect to the Server
    client = await MongoClient.connect(url)
    const db = client.db(dbName)
    const col = db.collection('insert1000Items')

    console.log('do something')

    console.time('start')
    for (let ii = 0; ii < 3000; ii++) {
      await col.insertOne({ [`foo-${ii}`]: 'god' })
    }
    console.timeEnd('start')
  } catch (err) {
    console.log(err.stack)
  }

  if (client) {
    client.close()
  }
})()
