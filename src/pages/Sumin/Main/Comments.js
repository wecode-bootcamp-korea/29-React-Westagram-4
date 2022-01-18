import React, { useState } from 'react';
import './Main.scss';
import InputComments from '../../Sumin/Main/InputComments';

function Comments() {
  const [comment, setComment] = useState('');
  const [isUploadBtn, setIsUploadBtn] = useState(false);

  const handleCommentInput = event => {
    setComment(event.target.value);
  };

  const upLoadBtnValidation = () => {
    return comment.length > 0 ? setIsUploadBtn(true) : setIsUploadBtn(false);
  };

  function uploadComment(event) {
    event.preventDefault();
  }

  //console.log(isUploadBtn);

  return (
    <div className="feed-comment">
      <ul className="comment-box">
        <InputComments userInput={comment} />
      </ul>
      <form className="reply">
        <input
          className="reply-input"
          type="text"
          placeholder="댓글 달기..."
          onChange={handleCommentInput}
          onKeyUp={upLoadBtnValidation}
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
