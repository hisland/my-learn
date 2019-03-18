const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5', { useNewUrlParser: true })

const schema1 = mongoose.Schema({
  dogName: { type: String, required: [true, 'my msg'] },
  dogHair: { type: String },
  dogTail: { type: Number },
})
const Dog = mongoose.model('dog', schema1, 'dog')

const one1 = new Dog({
  dogHair: 'black',
  noExist1: 1,
})
one1.noExist2 = 'bik'

console.log(one1)
