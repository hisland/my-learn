const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
type Query {
  me: User
}

type User {
  id: Int
  name: String
}
`)

const root = {
  me: {
    name: 'hey',
    id: 33,
  },
}
graphql(schema, '{me{name}}', root).then(response => {
  console.log(1, response)
})

graphql(schema, '{me{id}}', root).then(response => {
  console.log(2, response)
})
