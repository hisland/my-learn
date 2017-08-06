const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

let ss = mongoose.Schema({
  name: String,
  foo: String,
})

let Kitten = mongoose.model('ss', ss)

let doc = new Kitten()

// 什么都不做, 没有默认值, name,foo都没有, 只有 _id,__v
// doc.name = 'god' // 只设置这个, 只有这个key
// doc.foo = 'god' // 只设置这个, 只有这个key
// doc.bbq = 'god' // Schema没有这个key, 设置了也不被保存

console.log(doc)

doc.save(function(err, doc) {
  console.log(doc)
})
