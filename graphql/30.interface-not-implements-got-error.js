const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query{
    user: User
  }
  type User implements What {
    age: Int
  }
  interface What {
    name: String
  }
`)

const fakeDB = {
  user: {
    name: 'hdl',
    age: 18
  }
}
const query = `
{
  user {
    name
  }
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
