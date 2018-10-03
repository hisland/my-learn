const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    user: User
    set(user: UserInput): String
  }
  type User {
    name: String
    age: Int
  }
  input UserInput {
    name: String
    age: Int
  }
`)

const fakeDB = {
  user: {
    name: 'hdl',
    age: 18,
  },
  set(user) {
    console.log(user)
    return 'ss';
  }
}
const query = `
mutation {
  user {
    name: 1
  }
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
