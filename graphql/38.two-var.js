const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    user: [User]
    byAge(age: Int, above: Boolean): [User]
  }
  type User {
    name: String
    age: Int
    height: String
  }
`)

const fakeDB = {
  user: [
    {
      name: 'hdl',
      age: 18,
      height: '170cm',
    },
    {
      name: 'zs',
      age: 19,
      height: '170cm',
    },
    {
      name: 'ls',
      age: 21,
      height: '170cm',
    },
  ],
  byAge({ age, above }) {
    console.log(age, above)
    return this.user.filter(vv => above ? vv.age >= age : vv.age === age)
  },
}
const query = `
{
  byAge(age: 19, above: true) {
    name
  }
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
