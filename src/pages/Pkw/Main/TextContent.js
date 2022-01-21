import React, { useState, useEffect } from 'react';
import Comment from './Comment';

function TextContent({ comments }) {
  const [pastComments, setPastComments] = useState([]);
  const newCommentList = comments.map((comment, idx) => (
    <Comment key={idx} comment={comment} />
  ));

  useEffect(() => {
    fetch('http://localhost:3001/data/Pkw/pastComments.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setPastComments(data);
      });
  }, []);

  const pastCommentList = pastComments.map(data => (
    <Comment key={data.id} id={data.id} comment={data.comment} />
  ));

  return (
    <div className="text-contents">
      <div className="liked-people">
        <img
          className="profile-img-s"
          id=""
          alt="profile_image"
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
        <span className="post-preview">술 줭</span>
      </div>
      {pastCommentList}
      {newCommentList}
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
