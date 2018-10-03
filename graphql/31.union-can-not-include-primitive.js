const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query{
    name: What
  }
  union What = String | Int
`)

const fakeDB = {
  name: 'hdl',
  age: 18,
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
