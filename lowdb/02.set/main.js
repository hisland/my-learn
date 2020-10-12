const lowdb = require('lowdb')
const path = require('path')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join(__dirname, 'db.json'))

const db = lowdb(adapter)

console.log(db.set('newProp', 'new val').write())
