var { graphql, buildSchema } = require('graphql')

var schema = buildSchema(`
type Query {
  user: User
}
type Mutation {
  setName(name: String): User
}
type User {
  name: String
  id: Int
}
`)

var fakeDB = {
  name: 'hey1',
  id: 34,
}
var root = {
  user: fakeDB,
  setName(args){
    fakeDB.name = args.name
    return fakeDB
  }
}
graphql(schema, `
mutation {
  setName(name: "new 1"){
    name
  }
}
`, root).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
