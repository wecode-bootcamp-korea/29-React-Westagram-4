import React, { useState } from 'react';
import './Main.scss';

function Comments() {
  const [comment, setComment] = useState('');
  const [isUploadBtn, setIsUploadBtn] = useState(false);
  const [commentArray, setCommentArray] = useState([]);

  const handleCommentInput = event => {
    setComment(event.target.value);
    return comment.length > 0 ? setIsUploadBtn(true) : setIsUploadBtn(false);
  };

  function uploadComment(event) {
    event.preventDefault();
    let arr = [...commentArray];
    arr.unshift(comment);
    setCommentArray(arr);
  }

  return (
    <div className="feed-comment">
      <ul className="comment-box">
        {commentArray.map(input => {
          return (
            <li className="comment-list">
              <div className="id-box">
                <span className="your-name">임시아이디</span>
                <span className="comment-text">{input}</span>
              </div>
            </li>
          );
        })}
      </ul>
      <form className="reply">
        <input
          className="reply-input"
          type="text"
          placeholder="댓글 달기..."
          onChange={handleCommentInput}
          onKeyUp={handleCommentInput}
        />
        <button
          className={isUploadBtn ? 'btn-change' : 'reply-btn'}
          disabled={!isUploadBtn}
          onClick={uploadComment}
        >
          게시
        </button>
      </form>
    </div>
  );
}

export default Comments;
