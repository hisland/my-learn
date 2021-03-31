class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [1, 2, 3],
    }
    window.kkk = this

    this.set2 = this.set2.bind(this)
  }

  set1() {
    this.setState({
      arr: [33],
    })
  }

  set2() {
    this.setState({
      arr: ['a', , 'c'],
    })
  }

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.set1()
            }}
          >
            set1
          </button>
          <button onClick={this.set2}>set2</button>
        </div>
        <h1>Hello, {this.state.arr.join(',')}!</h1>
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'))
