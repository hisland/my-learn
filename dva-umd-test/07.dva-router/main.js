console.log('code before')

const { connect } = dva
const { Router, Route, Link, Switch } = dva.router
const { routerRedux } = dva.router

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

const Comp1 = connect((state) => {
  console.log('connect Comp1: ', state)
  return {
    foo: state.foo,
  }
})((props) => {
  console.log('Comp1: ', props)
  const { dispatch } = props
  return (
    <div>
      <div>Hello Comp1 {props.foo.that}</div>
      <div>
        <button onClick={() => dispatch(routerRedux.push('/sub2'))}>
          go sub2
        </button>
      </div>
    </div>
  )
})

const Comp2 = connect((state) => {
  console.log('connect Comp2: ', state)
  return {
    foo: state.foo,
  }
})((props) => {
  console.log('Comp2: ', props)
  const { dispatch } = props
  return (
    <div>
      <div>Hello Comp2 {props.foo.that}</div>
      <div>
        <button onClick={() => dispatch(routerRedux.push('/sub1'))}>
          go sub1
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
        <Link to="/sub1">sub1</Link>
        <Switch>
          <Route path="/sub1" exact>
            <Comp1></Comp1>
          </Route>
          <Route path="/sub2" exact>
            <Comp2></Comp2>
          </Route>
        </Switch>
      </div>
    </Router>
  )
})

app.start('#root')

console.log('code after')
