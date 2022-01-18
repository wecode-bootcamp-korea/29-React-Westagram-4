import React from 'react';
import './Main.scss';

function MainRight() {
  return (
    <div class="main-right">
      <div class="my-profile">
        <div class="my-box">
          <img class="my-image" src="images/Sumin/feed_profile.jpg" />
          <div class="my-info">
            <div class="my-id">yak_oruji__</div>
            <div class="my-name">오수민</div>
          </div>
        </div>
        <div class="change-id">전환</div>
      </div>
      <div class="recommand">
        <div class="reco-top">
          <div class="top-one">스토리</div>
          <div class="top-two">모두 보기</div>
        </div>
        <div class="recommand-box">
          <div class="info-box">
            <div class="reco-info">
              <img
                class="friend-img ring"
                src="images/Sumin/feed_profile.jpg"
              />
              <div class="friend-info">
                <div class="friend-id">yak_oruji__</div>
                <div class="how-many">16분전</div>
              </div>
            </div>
          </div>
          <div class="info-box">
            <div class="reco-info">
              <img
                class="friend-img ring"
                src="images/Sumin/feed_profile.jpg"
              />
              <div class="friend-info">
                <div class="friend-id">yak_oruji__</div>
                <div class="how-many">2시간전</div>
              </div>
            </div>
          </div>
          <div class="info-box">
            <div class="reco-info">
              <img
                class="friend-img ring"
                src="images/Sumin/feed_profile.jpg"
              />
              <div class="friend-info">
                <div class="friend-id">yak_oruji__</div>
                <div class="how-many">30초전</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recommand">
        <div class="reco-top">
          <div class="top-one">회원님을 위한 추천</div>
          <div class="top-two">모두 보기</div>
        </div>
        <div class="recommand-box">
          <div class="info-box">
            <div class="reco-info">
              <img class="friend-img" src="images/Sumin/feed_profile.jpg" />
              <div class="friend-info">
                <div class="friend-id">yak_oruji__</div>
                <div class="how-many">우와웅</div>
              </div>
            </div>
            <div class="follow">팔로우</div>
          </div>
          <div class="info-box">
            <div class="reco-info">
              <img class="friend-img" src="images/Sumin/feed_profile.jpg" />
              <div class="friend-info">
                <div class="friend-id">yak_oruji__</div>
                <div class="how-many">우와웅</div>
              </div>
            </div>
            <div class="follow">팔로우</div>
          </div>
          <div class="info-box">
            <div class="reco-info">
              <img class="friend-img" src="images/Sumin/feed_profile.jpg" />
              <div class="friend-info">
                <div class="friend-id">yak_oruji__</div>
                <div class="how-many">우와웅</div>
              </div>
            </div>
            <div class="follow">팔로우</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRight;
