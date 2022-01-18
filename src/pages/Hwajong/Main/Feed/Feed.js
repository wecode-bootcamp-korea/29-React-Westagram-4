import React, { useEffect, useRef, useState } from 'react';
import './Feed.scss';

const Feed = () => {
  // const [reviewId, setReviewId] = useState('crisis12');
  // const [reviewContentValue, setReviewContentValue] = useState('');

  const [postContent, setPostContent] = useState(['']);

  const [input, setInput] = useState('');
  const inputRef = useRef();

  const onKeyPress = e => {
    const content = e.target.value;
    if (e.key === 'Enter') {
      setPostContent([
        ...postContent,
        {
          id: 1,
          userName: 'wecode',
          content: content,
          isLiked: true,
        },
      ]);
      inputRef.current.value = '';
    }
  };

  const onChange = e => {
    setInput(e.target.value);
  };

  const onClick = () => {
    setPostContent([
      ...postContent,
      {
        id: 1,
        userName: 'wecode',
        content: input,
        isLiked: true,
      },
    ]);
    inputRef.current.value = '';
  };

  // const pictureReview = event => {
  //   event.preventDefault();
  //   const copyArr = [...postContent,];
  //   copyArr.push(reviewContentValue);
  //   setPostContent(copyArr);
  //   setReviewContentValue('');
  // };

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setPostContent(data);
      });
  }, []);

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
            <div>
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
                src="./images/Hwajong/hwajong_1.jpg"
                alt="friends-picture"
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
            {postContent.map((comment, i) => {
              return (
                <HwajongReview
                  key={comment.id}
                  name={comment.userName}
                  content={comment.content}
                />
              );
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
            onKeyPress={onKeyPress}
            onChange={onChange}
            ref={inputRef}
          />
          <button className="feed-comment__button" onClick={onClick}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
};

const HwajongReview = ({ name, content }) => {
  return (
    <div className="friends-comment">
      <div className="friends-comment__info">
        <span className="friends-comment__friend-id">
          <strong>{name}</strong>
        </span>
        <span className="friends-comment__friend-comment">{content}</span>
      </div>
    </div>
  );
};
export default Feed;
