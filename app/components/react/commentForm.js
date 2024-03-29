var CommentForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var author = React.findDOMNode(this.refs.author).value.trim();
    if(!author){
      return;
    }
    console.log(author);
    this.props.onCommentSubmit({author: author});
    React.findDOMNode(this.refs.author).value = '';
    return;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Your name" ref="author"/>
        <input type="submit" value="Post" />
      </form>
    );
  }
});
