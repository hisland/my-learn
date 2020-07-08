const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const SchemaDef = new mongoose.Schema({
  dogName: { type: String, required: [true, '名字必填'] },
  dogAge: { type: Number, required: [true, '年龄必填'] },
})
const Dog = mongoose.model('dog', SchemaDef, 'dog')

const obj1 = new Dog()
obj1._id = null
console.log(obj1)

{
  const SchemaDef = new mongoose.Schema({
    dogName: { type: String, required: [true, '名字必填'], default: '' },
    dogAge: { type: Number, required: [true, '年龄必填'], default: null }, // 不确定就用 null
  })
  const Dog = mongoose.model('dog2', SchemaDef, 'dog2')

  // 这样有默认值 方便前端好用
  const obj1 = new Dog()
  obj1._id = null
  console.log(obj1)
}
