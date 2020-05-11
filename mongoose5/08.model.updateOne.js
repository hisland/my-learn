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
  dogName: 'mike',
})

one1.save(function (err, rs) {
  console.log(1, err, rs)

  Dog.updateOne(
    rs,
    {
      dogHair: 'black',
    },
    function (err, rs) {
      console.log(2, err, rs)
    }
  )
})
