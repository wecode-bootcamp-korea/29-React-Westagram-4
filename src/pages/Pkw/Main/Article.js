import React, { useState } from 'react';
import ActionKeys from './ActionKeys';
import FeedPhotos from './FeedPhotos';
import FeedTop from './FeedTop';
import TextContent from './TextContent';
import WriteComment from './WriteComment';

function Article() {
  const [comments, setComment] = useState([]);
  const [current, setCurrent] = useState('');

  const handleComment = e => {
    setCurrent(e.target.value);
  };

  const addComment = () => {
    setComment(comments.concat(current));
    setCurrent('');
  };

  const receiveEnter = e => {
    if (e.key === 'Enter') {
      addComment();
    }
  };

  return (
    <div className="feeds">
      <article id="feed-01">
        <FeedTop userinfo={{ id: 'pkw.may' }} />
        <FeedPhotos />
        <ActionKeys />
        <TextContent comments={comments} />
        <WriteComment
          current={current}
          receiveEnter={receiveEnter}
          addComment={addComment}
          handleComment={handleComment}
          comment={comments}
        />
      </article>
    </div>
  );
}

export default Article;
