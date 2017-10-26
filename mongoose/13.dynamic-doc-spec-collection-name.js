const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test', { useMongoClient: true })

let ss = mongoose.Schema({}, {strict: false}) // 不强制doc结构
let Dog = mongoose.model('dog', ss, 'dog') // 第3个参数指定 collection 名字, 不会自动生成第一个参数的复数

let dd = new Dog({ prop1: 'hey', prop2: 'hey2',  })
dd.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('meow')
  }
})
