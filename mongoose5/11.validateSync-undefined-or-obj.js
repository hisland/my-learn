const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

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
const one2 = new Dog({
  dogHair: 'black',
  dogName: 'bik',
})

console.log(one1.validateSync())
console.log(one2.validateSync())
