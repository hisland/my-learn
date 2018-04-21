import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const Biu = <span>yes</span>

function Bb() {
  return <span>bb</span>
}

class Fa extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bb: 'q',
      list: ['b', 'd', 'e'],
    }
  }
  render() {
    return (
      <div id={name}>
        {this.state.list.map(vv => <span> { vv }</span>)}
      </div>
    )
  }
  componentDidMount(){
    console.log(1)
  }
  componentWillUnmount(){
    console.log(3)
  }
}

const name = 'hdl'
const what = (
  <h1 id={name}>
    <Bb />
  </h1>
)
ReactDOM.render(<Fa hey="2" />, document.getElementById('root'))
