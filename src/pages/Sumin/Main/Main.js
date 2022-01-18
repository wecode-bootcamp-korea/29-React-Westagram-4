import React from 'react';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';

function Main() {
  return (
    <div>
      <Nav />
      <main>
        <div className="feeds">
          <article>
            <div className="feed-profile">
              <img
                className="profile-img"
                src="images/Sumin/feed_profile.jpg"
              />
              <div className="profile-id">yak_oruji__</div>
              <img className="more" src="images/Sumin/more.png" />
            </div>
            <img className="feed-img" src="images/Sumin/feed_image.jpeg" />
            <div className="feed-icon">
              <img className="img-icon" src="images/Sumin/heart(1).png" />
              <img className="img-icon" src="images/Sumin/chat.png" />
              <img className="img-icon upload" src="images/Sumin/upload.png" />
              <img
                className="img-icon save"
                src="images/Sumin/save-instagram.png"
              />
            </div>
            <div className="feed-like">좋아요 24개</div>
            <div className="feed-content">
              <div className="profile-id">yak_oruji__</div>
              <div className="content">눈사람 머랭쿠키</div>
            </div>
            <div className="feed-comment">
              <ul className="comment-box" />
              <form className="reply">
                <input
                  className="reply-input"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <button className="reply-btn">게시</button>
              </form>
            </div>
          </article>
        </div>
        <div className="main-right">
          <div className="my-profile">
            <div className="my-box">
              <img className="my-image" src="images/Sumin/feed_profile.jpg" />
              <div className="my-info">
                <div className="my-id">yak_oruji__</div>
                <div className="my-name">오수민</div>
              </div>
            </div>
            <div className="change-id">전환</div>
          </div>
          <div className="recommand">
            <div className="reco-top">
              <div className="top-one">스토리</div>
              <div className="top-two">모두 보기</div>
            </div>
            <div className="recommand-box">
              <div className="info-box">
                <div className="reco-info">
                  <img
                    className="friend-img ring"
                    src="images/Sumin/feed_profile.jpg"
                  />
                  <div className="friend-info">
                    <div className="friend-id">yak_oruji__</div>
                    <div className="how-many">16분전</div>
                  </div>
                </div>
              </div>
              <div className="info-box">
                <div className="reco-info">
                  <img
                    className="friend-img ring"
                    src="images/Sumin/feed_profile.jpg"
                  />
                  <div className="friend-info">
                    <div className="friend-id">yak_oruji__</div>
                    <div className="how-many">2시간전</div>
                  </div>
                </div>
              </div>
              <div className="info-box">
                <div className="reco-info">
                  <img
                    className="friend-img ring"
                    src="images/Sumin/feed_profile.jpg"
                  />
                  <div className="friend-info">
                    <div className="friend-id">yak_oruji__</div>
                    <div className="how-many">30초전</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recommand">
            <div className="reco-top">
              <div className="top-one">회원님을 위한 추천</div>
              <div className="top-two">모두 보기</div>
            </div>
            <div className="recommand-box">
              <div className="info-box">
                <div className="reco-info">
                  <img
                    className="friend-img"
                    src="images/Sumin/feed_profile.jpg"
                  />
                  <div className="friend-info">
                    <div className="friend-id">yak_oruji__</div>
                    <div className="how-many">우와웅</div>
                  </div>
                </div>
                <div className="follow">팔로우</div>
              </div>
              <div className="info-box">
                <div className="reco-info">
                  <img
                    className="friend-img"
                    src="images/Sumin/feed_profile.jpg"
                  />
                  <div className="friend-info">
                    <div className="friend-id">yak_oruji__</div>
                    <div className="how-many">우와웅</div>
                  </div>
                </div>
                <div className="follow">팔로우</div>
              </div>
              <div className="info-box">
                <div className="reco-info">
                  <img
                    className="friend-img"
                    src="images/Sumin/feed_profile.jpg"
                  />
                  <div className="friend-info">
                    <div className="friend-id">yak_oruji__</div>
                    <div className="how-many">우와웅</div>
                  </div>
                </div>
                <div className="follow">팔로우</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
