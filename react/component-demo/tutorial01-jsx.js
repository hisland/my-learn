var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox" onClick={()=>{alert(3)}}>
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
