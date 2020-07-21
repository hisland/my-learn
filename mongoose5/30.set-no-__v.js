const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
;(async function () {
  const SchemaDef = new mongoose.Schema(
    {
      bar: { type: String },
    },
    {
      versionKey: false,
    }
  )
  const Test = mongoose.model('test-index5', SchemaDef, 'test-index5')
  // await Test.deleteMany()
  // await Test.createIndexes()

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
