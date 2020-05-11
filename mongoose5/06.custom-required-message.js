const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const schema1 = mongoose.Schema({
  dogName: { type: String, required: [true, '名字必填'] },
})
const Dog = mongoose.model('dog', schema1, 'dog')

const one1 = new Dog({
  halo: 1,
  bbq: 2,
})

one1.save(function (err) {
  console.log(err)
  console.log(err.message)
})
