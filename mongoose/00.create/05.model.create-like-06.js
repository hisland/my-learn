const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

let ss = mongoose.Schema({
  name: String,
  foo: String,
})

let Kitten = mongoose.model('ss', ss)


// Kitten.create({}, function(err, doc) { // 什么都不存
// Kitten.create({name: 'hello'}, function(err, doc) { // 只存这个key
// Kitten.create({foo: 'kit'}, function(err, doc) { // 只存这个key
Kitten.create({hey: 'no save'}, function(err, doc) { // Schema没定义不存
  console.log(arguments)
})
