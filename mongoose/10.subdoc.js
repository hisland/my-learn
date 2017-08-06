const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

let person = mongoose.Schema({
  name: String,
  height: Number,
})
let fact = mongoose.Schema({
  person: [person],
})

let Kitten = mongoose.model('fact', fact)

let doc = new Kitten()

doc.person.push({
  name: 'hey'
})

console.log(doc)

doc.save(function(err, doc) {
  console.log(doc)
})
