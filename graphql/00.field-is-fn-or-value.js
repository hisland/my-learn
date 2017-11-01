var { graphql, buildSchema } = require('graphql')

var schema = buildSchema(`
  type Query {
    hello1: String
    hello2: String
  }
`)

var root = {
  hello1: function() {
    return 'name'
  },
  hello2: 'name',
}
var query = `
{
  hello1
  hello2
}
`

graphql(schema, query, root).then(response => {
  console.log(response)
})
