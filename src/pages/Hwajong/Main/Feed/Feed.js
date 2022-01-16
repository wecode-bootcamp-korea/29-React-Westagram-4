import React, { useState } from 'react';
import './Feed.scss';

const Feed = () => {
  const [reviewId, setReviewId] = useState('crisis12');
  const [reviewContentValue, setReviewContentValue] = useState('');

  const [postContent, setPostContent] = useState([]);

  const pictureReview = event => {
    event.preventDefault();
    const copyArr = [...postContent];
    copyArr.push(reviewContentValue);
    setPostContent(copyArr);
    setReviewContentValue('');
  };

  return (
    <div>
      <div className="main-feed">
        <div className="feed-userBar">
          <div className="feed-userInfo">
            <img
              className="feed-userInfo user-img"
              src="/images/Hwajong/hwajong_1.jpg"
              alt="userPicture"
            />
            <p className="user-id">hjlee1811</p>
          </div>
          <div>
            <i className="fas fa-ellipsis-h" />
          </div>
        </div>
        <div className="feed-user__img">
          <img
            className="feed-img"
            src="/images/Hwajong/hwajong_1.jpg"
            alt="userFeedPicture"
          />
        </div>
        <div className="feed-reaction">
          <div className="feed-reaction__icons">
            <div className="">
              <i className="fas fa-heart" />
              <i className="far fa-comment" />
              <i className="fas fa-upload" />
            </div>
            <div>
              <i className="fas fa-ellipsis-h" />
            </div>
          </div>
          <div className="feed-comment">
            <div className="feed-comment__like">
              <img
                className="friends-img"
                src="./images/hwajong_1.jpg"
                alt="friendPicture"
              />
              <p className="like-notice">
                <strong>zerrdin</strong>님 외에 <strong>10명</strong>이
                좋아합니다.
              </p>
            </div>
            <div className="user-comment">
              <p className="user-comment__user-id">
                <strong>hjlee1811</strong>
              </p>
              <p className="user-comment__user-comment">aaaaaaaa</p>
            </div>
            <div className="friends-comment">
              <div className="friends-comment__info">
                <span className="friends-comment__friend-id">
                  <strong>zerrdin</strong>
                </span>
                <span className="friends-comment__friend-comment">
                  aaaaaaaa
                </span>
              </div>
              <div className="friends-comment__reaction">
                <i className="far fa-heart" />
              </div>
            </div>
            {postContent.map((item, i) => {
              return <HwajongReview reviewId={reviewId} item={item} key={i} />;
            })}
            <div className="friends-comment__times">
              <p>42분전에</p>
            </div>
          </div>
        </div>
        <div className="feed-comment__write">
          <input
            className="feed-comment__content"
            type="text"
            placeholder="댓글달기"
            onChange={event => {
              setReviewContentValue(event.target.value);
            }}
          />
          <button className="feed-comment__button" onClick={pictureReview}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
};

const HwajongReview = props => {
  return (
    <div className="friends-comment">
      <div className="friends-comment__info">
        <span className="friends-comment__friend-id">
          <strong>{props.reviewId}</strong>
        </span>
        <span className="friends-comment__friend-comment">{props.item}</span>
      </div>
    </div>
  );
};
export default Feed;
