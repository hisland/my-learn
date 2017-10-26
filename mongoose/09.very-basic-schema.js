const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

let ss = mongoose.Schema({
  name: String
})

let Kitten = mongoose.model('ss', ss)
let ll = new Kitten()

console.log(ll)

ll.name = 'halo'

console.log(ll)

console.log(ll.speak)

Kitten.prototype.speak = function(){
  console.log('speak')
}

console.log(ll.speak)
ll.speak()


ll.save(function(){
  console.log(arguments)
})
