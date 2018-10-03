const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    user: Episode
  }
  enum Episode {
    NEWHOPE
    EMPIRE
    JEDI
  }
`)

const fakeDB = {
  user: 'NEWHOPE'
}
const query = `
{
  user
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
