const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const schema1 = new mongoose.Schema({
  dogName: { type: String, required: true },
})
const Dog = mongoose.model('dog', schema1, 'dog')

;(async function () {
  {
    const one1 = new Dog({
      halo: 1,
      bbq: 2,
    })

    await one1.save(function (err) {
      console.log(11, err)
    })

    console.log(22)
  }

  {
    const one1 = new Dog({
      halo: 1,
      bbq: 2,
    })
    try {
      await one1.save()
    } catch (error) {
      console.log(11, error)
    }
    console.log(22)
  }
})()
