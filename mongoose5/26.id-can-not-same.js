const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
;(async function () {
  const SchemaDef = new mongoose.Schema({})
  const Test = mongoose.model('test-same-id', SchemaDef, 'test-same-id')
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

    const c2 = new Test({
      _id: c1._id, // 不能保存
      bar: 'bb',
      // say: 'bb',
    })
    await c2.save()
  }

  console.log('done')
  await mongoose.disconnect()
})()
