const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

let Dog = mongoose.model('Dog', {
  prop1: String,
})

// prop2 没有保存, schema 没有声明
Dog.create({ prop1: 'hey', prop2: 'hey2',  }, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log('meow')
  }
})
