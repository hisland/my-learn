const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

let ss = mongoose.Schema({
  name: String,
  foo: String,
})

let Kitten = mongoose.model('ss', ss)

Kitten.findOne({foo: 'bar'}, function(err, doc) {

  doc.name = 'hey3'

  doc.remove(function(err, doc) {
    console.log(doc)
  })
})
