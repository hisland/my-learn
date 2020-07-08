const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
;(async function () {
  const SchemaDef = new mongoose.Schema({
    dogName: { type: String, required: [true, '名字必填'] },
    dogAge: { type: Number, required: [true, '年龄必填'] },
  })
  const Dog = mongoose.model('dog', SchemaDef, 'dog')
})()
