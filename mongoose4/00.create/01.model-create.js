const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

let Cat = mongoose.model('Cat', { name: String })

Cat.create({ name: 'Zildjian1' }, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('meow')
  }
})
