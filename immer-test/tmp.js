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
console.log('baseState 原始', baseState)

function rawReducer(state = [], action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { todo: action.text, done: false }]
    case 'INVERSE':
      return state.map((vv) => ({
        ...vv,
        done: !vv.done,
      }))
    default:
      return state
  }
}

const rs1 = rawReducer(baseState, { type: 'ADD', text: 'some' })
console.log('baseState 没有被修改', baseState)
console.log('rs1', rs1)

const rs2 = rawReducer(baseState, { type: 'INVERSE' })
console.log('baseState 没有被修改', baseState)
console.log('rs2', rs2)

const immerReducer = produce((draft, action) => {
  switch (action.type) {
    case 'ADD':
      draft.push({ todo: action.text, done: false })
      break
    case 'INVERSE':
      draft.forEach((vv) => {
        vv.done = !vv.done
      })
      break
    // 不需要 default, 没有修改返回原始数据
  }
})

const rs3 = immerReducer(baseState, { type: 'ADD', text: 'some' })
console.log('baseState 没有被修改', baseState)
console.log('rs3', rs3)

const rs4 = immerReducer(baseState, { type: 'INVERSE' })
console.log('baseState 没有被修改', baseState)
console.log('rs4', rs4)
