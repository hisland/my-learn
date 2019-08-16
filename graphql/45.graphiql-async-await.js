const express = require('express')
const graphqlHTTP = require('express-graphql')

const app = express()

const { buildSchema } = require('graphql')

const schema = buildSchema(`
  schema {
    query: Query2
    mutation: Mutation1
  }
  type Query2 {
    user(name: String!): [User]
    byAge(age: Int, hasAge: Boolean): [User]
  }
  type Mutation1 {
    putOne(one: InputUser!): User
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
  userList: [
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
  async user({ name }) {
    return new Promise(function(resolve, reject) {
      resolve(fakeDB.userList.filter(vv => vv.name === name))
    })
    // return this.userList.filter(vv => vv.name === name)
  },
  byAge({ age }) {
    return this.userList.filter(vv => vv.age === age)
  },
  putOne({ one }) {
    this.userList.push(one)
    return one
  },
}

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: fakeDB,
    graphiql: true,
  })
)

app.listen(4000, function() {
  console.log('listen on 4000')
})
