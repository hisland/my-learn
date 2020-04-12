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
  home: { type: Schema.Types.ObjectId, ref: 'home' },
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

  const one1 = await Home.findOne()
  one1.name = 'foo'
  await one1.save() // 存入数据库
  console.log(home1.toJSON())
  console.log(one1.toJSON())

  const one2 = await Home.findOne()
  console.log(home1.toJSON())
  console.log(one1.toJSON())
  console.log(one2.toJSON())
})()
