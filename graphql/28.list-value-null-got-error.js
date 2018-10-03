const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    user: [String!]
  }
`)

const fakeDB = {
  user: ['a', 'b', null]
}
const query = `
{
  user
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
