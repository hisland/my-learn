const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
;(async function () {
  const SchemaDef = new mongoose.Schema({
    bar: { type: String, unique: true },
  })
  const Test = mongoose.model('test-index2', SchemaDef, 'test-index2')
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
    // 第 2 个无法保存
    const c1 = new Test({
      bar: 'aa',
      // say: 'bb',
    })
    await c1.save()
  }

  console.log('done')
  await mongoose.disconnect()
})()
