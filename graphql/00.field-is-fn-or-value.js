const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    hello1: String
    hello2: String
  }
`)

const fakeDB = {
  hello1: function() {
    return 'name'
  },
  hello2: 'name',
}
const query = `
{
  hello1
  hello2
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(response)
})
