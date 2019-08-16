const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5', {
  useNewUrlParser: true,
  useFindAndModify: false,
})

const { Schema, Types } = mongoose

const schema1 = mongoose.Schema({
  dogName: { type: String, required: [true, 'my msg'] },
  dogHair: { type: String },
  dogTail: { type: Number },
})
const Dog = mongoose.model('dog', schema1, 'dog')

;(async function() {
  const rs1 = new Dog({
    dogName: 'foo',
    dogHair: 'black',
    dogTail: 1,
  })
  console.log({
    ...rs1.toJSON()
  })
})()
