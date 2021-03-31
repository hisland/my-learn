'use strict'

const createElement = React.createElement

class LikeButton extends React.Component {
  constructor(props) {
    console.log('run constructor')

    super(props)
    this.state = { value: 'first' }
  }

  render() {
    console.log('run render every time')
    return createElement(
      'button',
      { onClick: () => this.setState({ value: Math.random().toString(36) }) },
      'Like: ' + this.state.value
    )
  }
}

const domContainer = document.querySelector('#like_button_container')
ReactDOM.render(createElement(LikeButton), domContainer)

console.log('code after')
