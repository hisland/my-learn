const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

let ss = mongoose.Schema({
  person: {
    name: String,
    height: Number,
  },
})

let Kitten = mongoose.model('ss', ss)


Kitten.create({person: {height:2}}, function(err, doc) {
  console.log(arguments)
})
