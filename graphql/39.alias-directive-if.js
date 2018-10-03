const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    user: [User]
    byAge(age: Int, hasAge: Boolean): [User]
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
  byAge({ age }) {
    return this.user.filter(vv => vv.age === age)
  },
}
const query = `
query {
  list2: byAge(age: 21) {
    name @include(if: false)
    age
  }
  list1: byAge(age: 19) {
    name @include(if: true)
    age
  }
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
