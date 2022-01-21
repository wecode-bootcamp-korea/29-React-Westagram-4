import React from 'react';

function WriteComment({ current, handleComment, receiveEnter, addComment }) {
  return (
    <div className="write-comment">
      <input
        type="text"
        placeholder="댓글 달기..."
        value={current}
        onChange={handleComment}
        onKeyPress={receiveEnter}
      />
      <span
        className="write-button"
        onClick={addComment}
        style={{ opacity: current ? 1 : 0.4 }}
      >
        게시
      </span>
    </div>
  );
}

export default WriteComment;
