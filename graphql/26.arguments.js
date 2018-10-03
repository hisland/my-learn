const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    user(age: Int): [ User ]
  }
  type User {
    name: String
    age: Int
  }
`)

const fakeDB = {
  user: [{
    name: 'hdl1',
    age: 18,
    friends: [
      {name: 'zs', age: 18},
      {name: 'ls', age: 19},
    ]
  },{
    name: 'hdl2',
    age: 22,
    friends: [
      {name: 'zs', age: 18},
      {name: 'ls', age: 19},
    ]
  }]
}
const query = `
{
  user (age: 18) {
    name
  }
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
