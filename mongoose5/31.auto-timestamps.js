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
      timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' },
    }
  )
  const Test = mongoose.model('test-index5', SchemaDef, 'test-index5')
  await Test.deleteMany()

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
    await new Promise(function (resolve, reject) {
      setTimeout(resolve, 1000)
    })
    c1.bar = 'bar2'
    await c1.save()
  }

  console.log('done')
  await mongoose.disconnect()
})()
