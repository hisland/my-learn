const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    user: [User]
    byAge(age: Int, hasAge: Boolean): [User]
  }
  type Mutation {
    putOne(one: InputUser): User
  }
  type User {
    name: String
    age: Int
    height: String
  }
  input InputUser {
    name: String
    age: Int
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
  putOne({ one }){
    this.user.push(one)
    return one;
  }
}
const query = `
{
  user {
    name
    ... {
      age
    }
  }
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
