const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
;(async function () {
  await mongoose.connection.dropDatabase()
  await mongoose.disconnect()
})()
