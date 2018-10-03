const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    user: User
  }
  type User {
    name: String
    age: Int
    height: String
  }
`)

const fakeDB = {
  user: {
    name: 'hdl',
    age: 18,
    height: '170cm',
  },
}
const query = `
{
  user {
    ...kk
  }
}
fragment kk on User {
  name
  age
  height
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
