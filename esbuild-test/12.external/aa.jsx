import _ from 'lodash'
import bb from './bb.js'

class App extends React.Component {
  render() {
    return (
      <div>
        hello {_.random()} {bb}
      </div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('app'))

function hello() {
  const aa = 1
  console.log(aa)
}
