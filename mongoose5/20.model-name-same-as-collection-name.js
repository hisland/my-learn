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
const Dog = mongoose.model('dog_say_hi', SchemaDef, 'dog_say_hi')

Dog.create(
  [
    {
      dogName: '妞妞',
      dogAge: 2,
    },
  ],
  function (err, docs) {
    console.log(err, docs)
  }
)
