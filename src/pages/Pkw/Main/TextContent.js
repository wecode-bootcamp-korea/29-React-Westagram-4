import React from 'react';

function TextContent() {
  return (
    <div className="text-contents">
      <div className="liked-people">
        <img
          className="profile-img-s"
          id=""
          src="/images/Pkw/profile-img5.png"
        />
        <span className="ids" id="">
          joomo
        </span>
        <span className="sir">님</span>
        <span className="number-of-people">외 10명</span>
        <span className="liked-sentence">이 좋아합니다</span>
      </div>
      <div className="text-post">
        <span className="ids" id="id-mine">
          pkw.may
        </span>
        <span className="post-preview">post-preview</span>
      </div>
      <div className="text-comments">
        <span className="ids" id="">
          hanjanjusio
        </span>
        <span className="comment-preview">comment-preview</span>
      </div>
      <div className="posted-time">
        <span className="time" id="posted-time-01">
          posted-time
        </span>
        <span className="time-min">분 전</span>
      </div>
    </div>
  );
}

export default TextContent;
