import React, { useState, useEffect } from 'react';
import './Feed.scss';

function Feed(props) {
  const [commentBtn, setCommentBtn] = useState(false);
  const [input, setInput] = useState('');
  const [comment, setComment] = useState([]);
  const [commentList, setCommentList] = useState([]);

  const btnClick = () => {
    let copyArr = [...comment];
    copyArr.push(input);
    setComment(copyArr);
  };

  const enterClick = e => {
    if (e.key === 'Enter') {
      btnClick();
      e.target.value = '';
    }
  };

  const CommentBtnChange = () => {
    return input.length >= 1 ? setCommentBtn(true) : setCommentBtn(false);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/Jieun/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <div className="feedJieun">
      <div className="feedHeader">
        <div className="feedUser">
          <img
            className="profileImg"
            alt="프로필 사진"
            src="images/Jieun/hongseoli.jpeg"
            width="32px"
          />
          <a className="feedProfileId" href="/">
            hongseoli
          </a>
        </div>
        <a href="/">
          <img alt="더 보기" src="images/Jieun/more.svg" width="24px" />
        </a>
      </div>
      <article>
        <img className="feedImg" alt="img" src={props.feedList.img} />
      </article>
      <div className="feedPost">
        <div className="feedPostIcon">
          <div className="feedIcon">
            <img alt="좋아요" src="images/Jieun/heart.svg" />
          </div>
          <div className="feedIcon">
            <img alt="댓글 달기" src="images/Jieun/comment.svg" />
          </div>
          <div className="feedIcon">
            <img alt="좋아요" src="images/Jieun/dm.svg" />
          </div>
          <div className="feedIcon">
            <img alt="저장" src="images/Jieun/bookmark.svg" />
          </div>
        </div>
      </div>
      <div className="post">
        <a className="like" href="/">
          좋아요 <span>{props.feedList.like}</span>개
        </a>
        <div className="content">
          <a className="id" href="/">
            hongseoli
          </a>
          <span>{props.feedList.content}</span>
        </div>
        <a href="/">
          <p className="commentMore">
            댓글 {props.feedList.comment}개 모두 보기
          </p>
        </a>
        <div className="commentDiv">
          {commentList.map((list, i) => {
            return <AddComment commentList={list} key={i} />;
          })}
          {comment.map(function (i) {
            return (
              <div className="newComment">
                <a className="id" href="/">
                  dog
                </a>
                <span>{i}</span>
              </div>
            );
          })}
        </div>
        <p className="time">3일 전</p>
      </div>
      <div className="commentBox">
        <div className="commentIcon">
          <img alt="이모지" src="images/Jieun/emoji.svg" />
        </div>
        <input
          className="comment"
          type="text"
          placeholder="댓글 달기..."
          onKeyPress={enterClick}
          onKeyUp={CommentBtnChange}
          onChange={e => {
            setInput(e.target.value);
          }}
        />
        <button
          className={commentBtn ? 'commentOn' : 'commentOff'}
          onClick={btnClick}
        >
          게시
        </button>
      </div>
    </div>
  );
}

function AddComment(props) {
  return (
    <div className="commentMsg">
      <a className="id" href="/">
        {props.commentList.id}
      </a>
      <span>{props.commentList.content}</span>
    </div>
  );
}

export default Feed;
