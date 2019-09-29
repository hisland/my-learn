const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// http://mongoosejs.com/docs/api.html#index_Mongoose-connect
// [options.useMongoClient] <Boolean> false by default, set to true to use new mongoose connection logic
mongoose.connect('mongodb://localhost/test', { useMongoClient: true })

let ss = mongoose.Schema({}, {strict: false})
let Dog = mongoose.model('dog', ss, 'dog')

let dd = new Dog({ prop1: 'hey', prop2: 'hey2',  })
dd.save(function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('meow')
  }
})
