console.log('code before')

const { connect } = dva
const { Router, Route, Link, Switch } = dva.router
const { routerRedux } = dva.router
const dynamic = dva.dynamic.default

const app = dva({})

app.router(({ app, history }) => {
  return (
    <div className="appRoot">
      <Comp1></Comp1>
    </div>
  )
})

const Comp1 = dynamic({
  app,
  models: () => [import('./model.js')],
  component: () => import('./Comp1.js'),
})

app.start('#root')

console.log('code after')
