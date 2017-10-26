const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

mongoose.connection.once('open', function(){
  console.log('open: ', arguments)
})

mongoose.connection.on('error', function(){
  console.log('error: ', arguments)
})
