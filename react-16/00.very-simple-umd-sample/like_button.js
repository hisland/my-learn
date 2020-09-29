'use strict'

const e = React.createElement

class LikeButton extends React.Component {
  constructor(props) {
    console.log('run constructor')

    super(props)
    this.state = { value: 'first' }
  }

  render() {
    console.log('run render every time')
    return e(
      'button',
      { onClick: () => this.setState({ value: Math.random().toString(36) }) },
      'Like: ' + this.state.value
    )
  }
}

const domContainer = document.querySelector('#like_button_container')
ReactDOM.render(e(LikeButton), domContainer)

console.log('code after')
