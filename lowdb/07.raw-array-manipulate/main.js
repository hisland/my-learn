const lowdb = require('lowdb')
const path = require('path')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join(__dirname, 'db.json'))

const db = lowdb(adapter)

const collection = db.defaults({ list: [] }).get('list') // defaults 必须 chain 调用

// Insert a new post...
const newPost = collection.push({ title: 'low2!' }).write()
console.log(newPost)
