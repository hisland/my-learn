var { graphql, buildSchema } = require('graphql')

var schema = buildSchema(`
type Query {
  list: [User]
  byId1(id: Int): User
  byId2(id: Int): User
}
type User {
  name: String
  id: Int
}
`)

var root = {
  list: [{
    name: 'hey1',
    id: 34,
  }, {
    name: 'hey2',
    id: 35,
  }, {
    name: 'hey3',
    id: 36,
  }, {
    name: 'hey4',
    id: 37,
  }, {
    name: 'hey5',
    id: 38,
  }, ],
  byId1({ id }){
    return this.list.find(vv => (vv.id === id))
  },
  byId2(args){
    return this.list.find(vv => (vv.id === args.id))
  }
}
graphql(schema, `
{
  byId1(id: 34){
    name
  }
  byId2(id: 36){
    name
  }
}
`, root).then(response => {
  console.log(JSON.stringify(response, null, ' '))
})
