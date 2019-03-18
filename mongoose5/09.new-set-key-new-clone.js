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
})
one1.dogName = 'bik'

const one2 = new Dog(one1)
one2.dogName = 'foo'

console.log(one1)
console.log(one2)
console.log('one1 === one2: ', one1 === one2)
