console.log('code before')

const { connect } = dva
const { Router, Route, Link, Switch } = dva.router

const app = dva({})
window.kkk = app

app.model({
  namespace: 'foo',
  state: {
    that: 1,
  },
  reducers: {
    add(state, action) {
      console.log('foo reducers add:', state, action)
      return {
        ...state,
        that: state.that + 1,
      }
    },
    del(state, action) {
      console.log('foo reducers del:', state, action)
      return {
        ...state,
        that: state.that - 1,
      }
    },
  },
  effects: {
    *addAfter1Second(action, { call, put }) {
      yield call(delay, 1000)
      yield put({ type: 'add' })
    },
  },
})

const Home = connect((state) => {
  console.log('connect Home: ', state.foo)
  return {
    foo: state.foo,
  }
})((props) => {
  console.log('Home: ', props)
  return (
    <div>
      <div>Hello Home {props.foo.that}</div>
      <div>
        <button
          onClick={() => props.dispatch({ type: 'foo/add', some: 'what' })}
        >
          add
        </button>
        <button
          onClick={() => props.dispatch({ type: 'foo/del', some: 'what' })}
        >
          del
        </button>
      </div>
    </div>
  )
})
const Sub = connect((state) => {
  console.log('connect Sub: ', state)
  return {
    foo: state.foo,
  }
})((props) => {
  console.log('Sub: ', props)
  return <div>Hello Sub {props.foo.that}</div>
})

app.router(({ app, history }) => {
  console.log(app === kkk)
  console.log(history)
  return (
    <Router history={history}>
      <div className="appRoot">
        <Home></Home>
        <hr />
        <Sub></Sub>
      </div>
    </Router>
  )
})

app.start('#root')

console.log('code after')
