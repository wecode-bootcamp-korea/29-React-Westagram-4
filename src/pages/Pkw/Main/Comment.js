import React from 'react';

function Comment({ comment }) {
  return (
    <div className="text-comments">
      <span className="ids" id="">
        healthy_liver
      </span>
      <span className="comment-preview">{comment}</span>
    </div>
  );
}

export default Comment;
