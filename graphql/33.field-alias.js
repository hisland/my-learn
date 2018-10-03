const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    user: User
  }
  type User {
    name: String
    age: Int
  }
`)

const fakeDB = {
  user: {
    name: 'hdl',
    age: 18,
  },
}
const query = `
query {
  user {
    aliasName: name
  }
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
