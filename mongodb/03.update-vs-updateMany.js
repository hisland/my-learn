const { MongoClient } = require('mongodb')
const { ObjectID } = require('mongodb')
const co = require('co')
const assert = require('assert')

co(function*() {
  // Connection URL
  const db = yield MongoClient.connect('mongodb://localhost:27017/test')
  console.log('Connected correctly to server')

  // Get the removes collection
  const col = db.collection('test-update-updateMany');
  yield col.deleteMany();

  let rs1 = yield col.insert([{a:99}, {a:100}, {a:101}, {a:102}]);

  let rs2 = yield col.update({a: 99}, {$set:{b:2}})
  console.log(rs2.result)

  function* findAll(){
    let list1 = yield col.find({}).toArray()
    console.log(list1)
    return list1
  }

  let list1 = yield findAll()

  var ids = list1.map(function(vv) {
    return vv._id;
  })
  console.log(ids)

  // 这2行等价
  // update 好像是 mongodb v2.6 的
  // let rs3 = yield col.update({_id: {$in: ids}}, {$set:{b:499}}, {multi:true})
  // updateMany 好像是 mongodb v3.2 的
  let rs3 = yield col.updateMany({_id: {$in: ids}}, {$set:{b:499}})

  yield findAll()

  db.close();
}).catch(function(err) {
  console.log(err.stack)
})
