import React from 'react';

function Comment({ id, comment }) {
  return (
    <div className="text-comments">
      <span className="ids" id={id}>
        {id ? id : 'liver'}
      </span>
      <span className="comment-preview">{comment}</span>
    </div>
  );
}

export default Comment;
