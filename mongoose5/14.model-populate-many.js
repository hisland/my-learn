const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})

const { Schema } = mongoose

const schema_dog = mongoose.Schema({
  dogName: { type: String, required: [true, 'my msg'] },
  dogHair: { type: String },
  dogTail: { type: Number },
  home1: { type: Schema.Types.ObjectId, ref: 'home' },
  home2: { type: Schema.Types.ObjectId, ref: 'home' },
})
const Dog = mongoose.model('dog', schema_dog, 'dog')

const schema_home = mongoose.Schema({
  name: { type: String },
})
const Home = mongoose.model('home', schema_home, 'home')

;(async function () {
  await Home.deleteMany()
  await Dog.deleteMany()

  const home1 = new Home({
    name: 'hdl',
  })
  await home1.save()
  const home2 = new Home({
    name: 'bbq',
  })
  await home2.save()

  const dog1 = new Dog({
    dogName: 'foo',
    dogHair: 'black',
    dogTail: 1,
    home1: home1._id,
    home2: home2._id,
  })

  await dog1.save()

  // console.log(home1.toJSON(), dog1.toJSON())

  const list1 = await Dog.findOne().populate('home1 home2')
  console.log(list1)
})()
