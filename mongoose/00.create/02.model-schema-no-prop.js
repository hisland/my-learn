const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

let Dog = mongoose.model('Dog', {})

// name 没有保存, schema 没有声明
Dog.create({ name: 'Zildjian1' }, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('meow')
  }
})
