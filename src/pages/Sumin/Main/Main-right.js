import React from 'react';
import './Main.scss';

function MainRight() {
  return (
    <div className="main-right">
      <div className="my-profile">
        <div className="my-box">
          <img
            className="my-image"
            alt="feed img"
            src="images/Sumin/feed_profile.jpg"
          />
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
                alt="profile img"
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
                alt="profile img"
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
                alt="profile img"
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
                alt="profile img"
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
                alt="profile img"
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
                alt="profile img"
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
  );
}

export default MainRight;
