const { MongoClient } = require('mongodb')
const co = require('co')
const assert = require('assert')

function FromTo(from, to){
  var temp = 0, len = arguments.length;
  from -= 0;
  to -= 0;
  if(len === 0){
    return Math.random();
  }else if(len === 1){
    if(isNaN(from)){
      return null;
    }else{
      to = from;
      from = 0;
    }
  }else{
    if(isNaN(from) && isNaN(to)){
      return null;
    }else if(isNaN(from)){
      from = 0;
    }else if(isNaN(to)){
      to = from;
      from = 0;
    }
  }
  if(from > to){
    temp = from;
    from = to;
    to = temp;
  }
  temp = to - from;
  temp = Math.round(Math.random() * (temp+100) % temp);
  return from + temp;
}

co(function*() {
  // Connection URL
  const db = yield MongoClient.connect('mongodb://localhost:27017/learn-mongodb')
  console.log('Connected correctly to server')

  const col = db.collection('indexTest')

  let rs

  console.log('start: ')

  col.createIndex( { someKey: 1 } )

  // 首先全部清空
  yield col.remove()
  const list = []
  for(let ii=0; ii<10000; ii++){
    list.push({ someKey: FromTo(1, 987623) })
  }

  rs = yield col.insertMany(list)

  console.time('timeTest')
  // Insert multiple documents
  rs = yield col.find({
    someKey: {
      $gte: 10,
      $lte: 90000,
    }
  }).toArray()
  console.log(2, rs.length)

  console.timeEnd('timeTest')
  console.log('end: ')
  db.close()
}).catch(function(err) {
  console.log(err.stack)
})
