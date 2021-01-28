'use strict'

class LikeButton extends React.Component {
  constructor(props) {
    console.log('run constructor')

    super(props)
    this.state = { value: 'first' }
  }

  render() {
    console.log('run render every time')

    return (
      <button onClick={() => this.setState({ value: Math.random().toString(36) })}>
        Like {this.state.value}
      </button>
    )
  }
}

const domContainer = document.querySelector('#like_button_container')
ReactDOM.render(<LikeButton></LikeButton>, domContainer)

console.log('code after')
