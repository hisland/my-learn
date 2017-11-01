var { graphql, buildSchema } = require('graphql')

var schema = buildSchema(`
type Query {
  me: User
}
type Freiends {
  id: Int
  name: String
}
type User {
  id: Int
  name: String
  friends: [Freiends]
}
`)

var root = {
  me: {
    name: 'hey',
    id: 33,
    friends: [
      { name: 'aa1', id: 44 },
      { name: 'aa2', id: 45 },
      { name: 'aa3', id: 46 },
      { name: 'aa4', id: 47 },
    ],
  },
}
graphql(schema, '{me{friends{name}}}', root).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})

graphql(schema, '{me{friends{id}}}', root).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
