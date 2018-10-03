const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    user: User
  }
  type User {
    name: String
  }
`)

const fakeDB = {
  user: {
    name: 'hdl',
    age: 18,
    friends: [
      {name: 'zs', age: 18},
      {name: 'ls', age: 19  },
    ]
  }
}
const query = `
{
  user {
    name
    age
  }
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(response)
})
