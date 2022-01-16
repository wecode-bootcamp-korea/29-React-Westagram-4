import React from 'react';
import './rightmenu.scss';

function RightMenu() {
  return (
    <div className="main-right">
      <div className="my-area">
        <img
          className="profile-img-l"
          id="mine"
          alt="profile_image"
          src="/images/Pkw/profile-img.png"
        />
        <div className="id-area">
          <span className="ids">pkw.may</span>
          <span className="my-name">경오니소스</span>
        </div>
      </div>
      <div className="story-area">
        <div className="story-title">
          <span>스토리</span>
          <span>모두 보기</span>
        </div>
        <div className="story-set">
          <img
            className="profile-img-m"
            id=""
            alt="profile_image"
            src="/images/Pkw/profile-img4.png"
          />
          <div className="story-info" id="story-01">
            <span className="ids">chuihae</span>
            <div className="story-time">
              <span className="time" id="stored-time">
                stored-time
              </span>
              <span className="time-min">분 전</span>
            </div>
          </div>
        </div>
        <div className="story-set">
          <img
            className="profile-img-m"
            id=""
            alt="profile_image"
            src="/images/Pkw/profile-img6.png"
          />
          <div className="story-info" id="story-01">
            <span className="ids">jota</span>
            <div className="story-time">
              <span className="time" id="stored-time">
                stored-time
              </span>
              <span className="time-min">분 전</span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendation-area">
        <div className="recommend-title">
          <span>회원님을 위한 추천</span>
          <span>모두 보기</span>
        </div>
        <div className="recommend-set">
          <img
            className="profile-img-m"
            id=""
            alt="profile_image"
            src="/images/Pkw/profile-img3.png"
          />
          <div className="recommend-info" id="recommend-01">
            <span className="ids">joonim</span>
            <div className="followed-people">
              <span className="ids" id="recommend-id-01">
                2chagogo
              </span>
              <span className="sir">님 외</span>
              <span className="number-of-people">n</span>
              <span className="followed-text">명이 팔로우했습니다</span>
            </div>
          </div>
        </div>
        <div className="recommend-set">
          <img
            className="profile-img-m"
            id=""
            alt="profile_image"
            src="/images/Pkw/profile-img7.png"
          />
          <div className="recommend-info" id="recommend-01">
            <span className="ids">1000goock</span>
            <div className="followed-people">
              <span className="ids" id="recommend-id-01">
                joomo
              </span>
              <span className="sir">님 외</span>
              <span className="number-of-people">n</span>
              <span className="followed-text">명이 팔로우했습니다</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightMenu;
