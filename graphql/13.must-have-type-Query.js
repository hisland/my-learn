const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
type Query {
  name: String
}
`)

const root = {
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
