const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    hello1: String
    hello2: String
  }
`)

const fakeDB = {
  user: {
    name: 'hdl',
    age: 18,
    friends: [
      {name: 'zs', age: 18},
      {name: 'ls', age: 19  },
    ]
  }
}
const query = `
{
  user { # 上面 Query 没有定义 user
    name
  }
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(response)
})
