const { produce } = require('immer')

const baseState = [
  {
    todo: 'Learn typescript',
    done: true,
  },
  {
    todo: 'Try immer',
    done: false,
  },
]
console.log('baseState', baseState)

const mapper = produce((draft, index) => {
  console.log('draft', draft)
  draft.index = index
})

const nextState = baseState.map(mapper)

console.log('baseState 没有被修改', baseState)
console.log('nextState', nextState)
