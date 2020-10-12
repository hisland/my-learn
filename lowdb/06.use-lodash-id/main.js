const lowdb = require('lowdb')
const path = require('path')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join(__dirname, 'db.json'))

// 文档地址 https://github.com/typicode/lodash-id
const lodashId = require('lodash-id')

const db = lowdb(adapter)
db._.mixin(lodashId)

const collection = db.defaults({ list: [] }).get('list') // defaults 必须 chain 调用

// Insert a new post...
const newPost = collection.insert({ title: 'low!' }).write()
console.log(newPost)
