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

    console.log('do something')

  } catch (err) {
    console.log(err.stack);
  }

  if (client) {
    client.close();
  }
})();
