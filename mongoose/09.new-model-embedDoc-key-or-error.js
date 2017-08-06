const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

let ss = mongoose.Schema({
  person: {
    name: String,
    height: Number,
  },
})

let Kitten = mongoose.model('ss', ss)

let doc = new Kitten()

console.log(doc)

doc.person.name = 'bb' // 设置了
doc.person.bbq = 'bbq' // 不起作用

console.log(doc)

doc.abc.bbq = 'bbq' // 报错
