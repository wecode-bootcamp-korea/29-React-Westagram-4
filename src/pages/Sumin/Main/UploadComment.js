import React from 'react';
import './Main.scss';

function UploadComment(props) {
  return (
    <li className="comment-list">
      <div className="id-box">
        <span className="your-name">임시아이디</span>
        <span className="comment-text">{props.commentInput}</span>
      </div>
    </li>
  );
}

export default UploadComment;
