const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
;(async function () {
  const SchemaDef = new mongoose.Schema({
    test: { type: String },
  })
  const Test = mongoose.model('test', SchemaDef, 'test')

  const c0 = await Test.findOne()

  const c1 = new Test({
    test: 'bb',
  })
  console.log(22, c1)
  // await c1.save()
  // c1._id = '33'

  console.log(11, c0)
  await Test.updateOne({ _id: c0._id }, c1)

  await mongoose.disconnect()
})()
