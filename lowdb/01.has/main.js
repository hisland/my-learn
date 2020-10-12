const lowdb = require('lowdb')
const path = require('path')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join(__dirname, 'db.json'))

const db = lowdb(adapter)

console.log(db.has('some').value())
console.log(db.has('no prop').value())
