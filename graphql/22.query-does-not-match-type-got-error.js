const { graphql, buildSchema } = require('graphql')

const schema = buildSchema(`
  type Query {
    user: String
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
  user { # 上面 user 是个 String, 类型不匹配
    name
  }
}
`

graphql(schema, query, fakeDB).then(response => {
  console.log(response)
})
