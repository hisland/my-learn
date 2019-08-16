const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5', { useNewUrlParser: true })

const schema1 = mongoose.Schema({}, { strict: false }) // 不强制doc结构
const Dog = mongoose.model('dog', schema1, 'dog') // 第3个参数指定 collection 名字, 不会自动生成第一个参数的复数

{
  const one1 = new Dog({
    halo: 1,
    bbq: 2,
  })
  console.log(1, one1)
  one1.save(function(err, rs) {
    console.log(2, err, rs)
  })
}

{
  let item = {
    halo: 33,
    bbq: 2,
  }
  Dog.create(item, function(err, rs) {
    console.log(err, rs)
  })
}
