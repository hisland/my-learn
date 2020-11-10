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

const nextState = produce(baseState, (draftState) => {
  draftState.push({ todo: 'Tweet about it' })
  draftState[1].done = true
})

console.log('baseState unchange', baseState)
console.log('nextState', nextState)
