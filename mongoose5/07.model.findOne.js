const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const schema1 = mongoose.Schema({}, { strict: false }) // 不强制doc结构
const Dog = mongoose.model('dog', schema1, 'dog') // 第3个参数指定 collection 名字, 不会自动生成第一个参数的复数

Dog.findOne({}, function (err, rs) {
  console.log(1, rs)
})

Dog.findOne({}).exec(function (err, rs) {
  console.log(2, rs)
})

~(async function () {
  const rs1 = await Dog.findOne({})
  console.log(3, rs1)

  const rs2 = await Dog.findOne({}).exec()
  console.log(4, rs2)
})()
