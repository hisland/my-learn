const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
;(async function () {
  const SchemaDef = new mongoose.Schema({
    bar: { type: String, index: true },
  })
  const Test = mongoose.model('test-index1', SchemaDef, 'test-index1')
  await Test.deleteMany()

  {
    // console.log(SchemaDef.path('_id'))
    // console.log(SchemaDef.path('bar'))
    // console.log(SchemaDef.path('say'))
  }

  {
    const c1 = new Test({
      bar: 'aa',
      // say: 'bb',
    })
    await c1.save()
  }
  {
    const c1 = new Test({
      bar: 'aa',
      // say: 'bb',
    })
    await c1.save()
  }

  console.log('done')
  await mongoose.disconnect()
})()
