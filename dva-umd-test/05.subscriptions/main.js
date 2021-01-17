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
    *SomeEffect(action, effects) {
      const { call, put } = effects
      console.log('effect 1', arguments)
      console.log(action)
      yield call(function delay(ms, value = true) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms, value)
        })
      }, 1000)
      console.log('effect 2')
      yield put({ type: 'add' })
      console.log('effect 3')
    },
  },
  subscriptions: {
    setup({ dispatch, history }, done) {
      console.log('subscriptions setup: ')
      return function unlisten() {
        console.log('subscriptions unlisten: ')
      }
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
        <button
          onClick={() =>
            props.dispatch({ type: 'foo/SomeEffect', some: 'what' })
          }
        >
          SomeEffect delay 1s add
        </button>
      </div>
    </div>
  )
})

app.router(({ app, history }) => {
  console.log(app === kkk)
  console.log(history)
  return (
    <Router history={history}>
      <div className="appRoot">
        <Home></Home>
      </div>
    </Router>
  )
})

app.start('#root')

console.log('code after')
