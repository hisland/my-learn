/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, completed: false }]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          })
        } else {
          return todo
        }
      })
    default:
      return state
  }
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = Redux.combineReducers({
  visibilityFilter,
  todos,
})

function logger1({ dispatch, getState }) {
  return (next) => (action) => {
    console.log('logger1: will dispatch', action)
    console.log('logger1: state before dispatch', JSON.stringify(getState()))
    const returnValue = next(action)
    console.log('logger1: returnValue', returnValue)
    console.log('logger1: state after dispatch', JSON.stringify(getState()))
    returnValue.text += '  l1'
    return returnValue
  }
}
function logger2({ dispatch, getState }) {
  return (next) => (action) => {
    console.log('logger2: will dispatch', action)
    console.log('logger2: state before dispatch', JSON.stringify(getState()))
    const returnValue = next(action)
    console.log('logger2: returnValue', returnValue)
    console.log('logger2: state after dispatch', JSON.stringify(getState()))
    returnValue.text += '  l2'
    return returnValue
  }
}

const store1 = Redux.createStore(
  todoApp,
  Redux.applyMiddleware(logger1, logger2)
)
console.log('app: ', store1)
console.log('app.getState: ', store1.getState())

const unsubscribe = store1.subscribe(() =>
  console.log('subscribe:', JSON.stringify(store1.getState()))
)

store1.dispatch(addTodo('some1'))
// store1.dispatch(addTodo('some2'))
// store1.dispatch(toggleTodo(1))

unsubscribe()
