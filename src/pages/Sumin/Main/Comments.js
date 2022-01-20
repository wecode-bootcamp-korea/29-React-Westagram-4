import React, { useState } from 'react';
import './Main.scss';
import UploadComment from '../../Sumin/Main/UploadComment';

function Comments() {
  const [comment, setComment] = useState('');
  const [isUploadBtn, setIsUploadBtn] = useState(false);
  const [commentArray, setCommentArray] = useState([]);

  const handleCommentInput = event => {
    setComment(event.target.value);
    return comment.length > 0 ? setIsUploadBtn(true) : setIsUploadBtn(false);
  };

  const resetInput = () => {
    return setComment('');
  };

  function upload(event) {
    event.preventDefault();
    let arr = [...commentArray];
    arr.push(comment);
    setCommentArray(arr);
    resetInput();
  }

  return (
    <div className="feed-comment">
      <ul className="comment-box">
        {commentArray.map(commentArray => {
          return <UploadComment commentInput={commentArray} />;
        })}
      </ul>
      <form className="reply">
        <input
          className="reply-input"
          type="text"
          placeholder="댓글 달기..."
          onChange={handleCommentInput}
          value={comment}
          onKeyUp={handleCommentInput}
        />
        <button
          className={isUploadBtn ? 'btn-change' : 'reply-btn'}
          disabled={!isUploadBtn}
          onClick={upload}
        >
          게시
        </button>
      </form>
    </div>
  );
}

export default Comments;
