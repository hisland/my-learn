const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const schema1 = new mongoose.Schema({}, { strict: false }) // 不强制doc结构
const Dog = mongoose.model('dog', schema1, 'dog') // 第3个参数指定 collection 名字, 不会自动生成第一个参数的复数

const dd = new Dog({ prop1: 'hey', prop2: 'hey2' })
dd.save(function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('meow')
  }

  mongoose.disconnect()
})
