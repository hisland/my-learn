var CommentForm = React.createClass({
  getInitialState: function(){
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e){
    this.setState({author: e.target.value})
  },
  handleTextChange: function(e){
    this.setState({text: e.target.value})
  },
  render: function(){
    return (
      <form className="commentForm">
        <input
          type="text"
          placeholder="Your Name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChage}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
})
