const { MongoClient } = require('mongodb')
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  const db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  const col = db.collection('loop-then-insertMany')

  let rs

  // 首先全部清空
  yield col.remove()

  console.log('start: ')
  console.time('timeTest')
  const list = []
  for(let ii=0; ii<1000; ii++){
    list.push({ someKey: Math.random() })
  }

  rs = yield col.insertMany(list)

  // Insert multiple documents
  rs = yield col.find().toArray()
  console.log(2, rs.length)

  console.timeEnd('timeTest')
  console.log('end: ')
  db.close()
}).catch(function(err) {
  console.log(err.stack)
})
