var { graphql, buildSchema } = require('graphql')

var schema = buildSchema(`
type Query {
  me: User
}

type User {
  id: Int
  name: String
}
`)

var root = {
  me: {
    name: 'hey',
    id: 33,
  },
}
graphql(schema, '{me{name}}', root).then(response => {
  console.log(response)
})

graphql(schema, '{me{id}}', root).then(response => {
  console.log(response)
})
