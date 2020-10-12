const lowdb = require('lowdb')
const path = require('path')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join(__dirname, 'db.json'))

const db = lowdb(adapter)

console.log(db.set('newProp', 'aha').value())
console.log(db.get('newProp').value())

console.log(db.read().value())
console.log(db.get('newProp').value())
