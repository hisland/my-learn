const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useFindAndModify: false,
})

const schema1 = mongoose.Schema({
  dogName: { type: String, required: [true, 'my msg'] },
  dogHair: { type: String },
  dogTail: { type: Number },
})
const Dog = mongoose.model('dog', schema1, 'dog')

;(async function () {
  const rs1 = await Dog.create({
    dogName: 'foo',
    dogHair: 'black',
    dogTail: 1,
  })
  console.log(rs1)

  const rs2 = await Dog.findOneAndUpdate(
    { _id: rs1._id },
    {
      dogName: 'foo2',
      dogHair: 'black2',
      dogTail: 2,
    }
  )
  console.log(rs2)
})()
