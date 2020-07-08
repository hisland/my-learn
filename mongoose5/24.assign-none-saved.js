const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
;(async function () {
  const SchemaDef = new mongoose.Schema({
    test1: { type: String },
    test2: { type: String },
  })
  const Test = mongoose.model('test1', SchemaDef, 'test1')

  const c0 = await Test.findOne()

  const c1 = new Test({
    test1: 'bb',
  })
  const c2 = new Test({
    test1: 'cc',
    test2: 'cc',
  })
  console.log(22, c1, c2)

  Object.assign(c1, c2)
  console.log(22, c1, c2)

  // await c1.save()
  // c1._id = '33'

  await mongoose.disconnect()
})()
