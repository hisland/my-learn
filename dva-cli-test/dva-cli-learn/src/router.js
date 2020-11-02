import React from 'react'
import { Router, Route, Switch, Link } from 'dva/router'
import IndexPage from './routes/IndexPage'
import FooPage from './routes/FooPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/foo">foo</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/foo" component={FooPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default RouterConfig
