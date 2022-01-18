import React from 'react';
import './Main.scss';

function Comments() {
  return (
    <div class="feed-comment">
      <ul class="comment-box"></ul>
      <form class="reply">
        <input class="reply-input" type="text" placeholder="댓글 달기..." />
        <button class="reply-btn">게시</button>
      </form>
    </div>
  );
}

export default Comments;
