var { graphql, buildSchema } = require('graphql')

var schema = buildSchema(`
type Query {
  name: String
}
`)

var root = {
  name: 'hey',
  id: 33,
}
graphql(schema, `
{
  name
}
`, root).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
graphql(schema, `
query {
  name
}
`, root).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
