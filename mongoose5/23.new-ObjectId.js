const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
;(async function () {
  const aa1 = mongoose.Types.ObjectId()
  console.log(11, aa1)
  console.log(22, aa1.getTimestamp())
  console.log(33, aa1.toHexString())

  console.log(44, aa1._id instanceof mongoose.Types.ObjectId)
  console.log(44, aa1._id instanceof mongoose.ObjectId)

  console.log(55, mongoose.ObjectId === mongoose.Schema.ObjectId)
  console.log(55, mongoose.ObjectId === mongoose.Types.ObjectId)

  await mongoose.disconnect()
})()
