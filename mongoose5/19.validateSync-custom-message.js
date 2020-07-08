const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/mongoose5-learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const SchemaDef = new mongoose.Schema({
  dogName: { type: String, required: [true, '名字必填'] },
  dogAge: { type: Number, required: [true, '年龄必填'] },
})
const Dog = mongoose.model('dog', SchemaDef, 'dog')

function GetErrorMsgList(item) {
  const err = item.validateSync()
  if (err) {
    const list1 = Object.entries(err.errors)
    // for (const [key, obj] of list1) {
    //   console.log(key, obj.message)
    // }
    const list2 = list1.map(([key, obj]) => [key, obj.message])
    return list2
  }
}

console.log(
  GetErrorMsgList(
    new Dog({
      dogName: '妞妞',
      dogAge: 2,
    })
  )
)
console.log(
  GetErrorMsgList(
    new Dog({
      halo: 1,
      bbq: 2,
    })
  )
)
