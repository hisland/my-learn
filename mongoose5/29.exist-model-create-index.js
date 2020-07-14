const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
;(async function () {
  const SchemaDef = new mongoose.Schema({
    bar: { type: String, index: true },
  })
  const Test = mongoose.model('test-index4', SchemaDef, 'test-index4')
  // await Test.deleteMany()
  await Test.createIndexes()

  // {
  //   const c1 = new Test({
  //     bar: 'aa',
  //     // say: 'bb',
  //   })
  //   await c1.save()
  // }

  console.log('done')
  await mongoose.disconnect()
})()
