function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const initialState = ['Use Redux']

const store = Redux.createStore(todos, initialState, function (createStore) {
  console.log(1, createStore === Redux.createStore)
  return function (reducer, preloadedState) {
    console.log(2, reducer === todos)
    console.log(3, preloadedState === initialState)

    return createStore(reducer, preloadedState)
  }
})

store.dispatch({
  type: 'ADD_TODO',
  text: 'Read the docs',
})

console.log(store.getState())
