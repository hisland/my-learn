const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
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

const fakeDB = {
  name: 'hey1',
  id: 34,
}
const root = {
  user: fakeDB,
  setName(args){
    fakeDB.name = args.name
    return fakeDB
  }
}

console.log('before: ', fakeDB)
graphql(schema, `
mutation {
  aa1: setName(name: "new 1"){
    name
  }
  aa2: setName(name: "new 2"){
    name
  }
}
`, root).then(response => {
  console.log(JSON.stringify(response, null, ' '))
  console.log('after: ', fakeDB)
})
