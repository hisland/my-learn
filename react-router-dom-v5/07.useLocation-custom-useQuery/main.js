const { useState, createContext } = React
const { Route, Link, NavLink, Switch } = ReactRouterDOM
const { useRouteMatch, useLocation } = ReactRouterDOM
// const { BrowserRouter: Router } = ReactRouterDOM
const { HashRouter: Router } = ReactRouterDOM

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home/some?foo=bar">some</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/home/:name">
            <Home>
              <div>Home children</div>
            </Home>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function Home(props) {
  console.log('home', props)
  const match = useRouteMatch()
  console.log(match)
  const query = useQuery()
  for (const vv of query.entries()) {
    console.log(vv)
  }
  return (
    <div>
      <h2>home {match.params.name}</h2>
      <div>{props.children}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')
