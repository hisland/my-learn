const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    user(name: String!): [User]
    byAge(age: Int, hasAge: Boolean): [User]
  }
  type Mutation {
    putOne(one: InputUser): User
  }
  type User {
    name: String
    age: Int
    height: String
    school: School
  }
  type School {
    name: String
    addr: String
  }
  input InputUser {
    name: String
    age: Int
  }
`)

const fakeDB = {
  userList: [
    {
      name: 'hdl',
      age: 18,
      height: '170cm',
      school: '1',
    },
  ],
  schoolList: [{ name: '1', addr: '1a' }],
  user({ name }) {
    return this.userList.filter(vv => vv.name === name)
  },
  byAge({ age }) {
    return this.userList.filter(vv => vv.age === age)
  },
  putOne({ one }) {
    this.userList.push(one)
    return one
  },
  school(query) {
    console.log(11, query)
    return one
  },
  School(query) {
    console.log(11, query)
    return one
  },
}
const query = `
query {
  user(name: "hdl") {
    name
    school {
      name
      addr
    }
  }
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
