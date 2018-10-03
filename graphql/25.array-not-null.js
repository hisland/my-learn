const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    user: User
  }
  type User {
    name: String
    age: Int
    friends: [ User ]!
  }
`)

const fakeDB = {
  user: {
    name: 'hdl',
    age: 18,
    friends: null
  }
}
const query = `
{
  user {
    name
    friends {
      name
    }
  }
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
