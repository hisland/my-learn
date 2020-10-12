const lowdb = require('lowdb')
const path = require('path')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(path.join(__dirname, 'db.json'))

const db = lowdb(adapter)

console.log(
  db.setState({
    some: 'value',
    halo: 3,
  })
)

console.log(db.getState())

db.write()
