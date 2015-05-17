var Comment = React.createClass({
  render: function() {
    var comments = this.props.data.map(function (comment){
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {comment.author}
          </h2>
        </div>
      );
    });
    return (
      <div className="comments">
        {comments}
      </div>
    );
  }
});
