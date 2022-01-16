import React from 'react';
import '../Recommend/Recommend.scss';

const Recommend = () => {
  return (
    <div>
      <div className="main-right__recommend">
        <div className="recommend__title">
          <p className="recommend__smallTitle">회원님을 위한 추천</p>
          <p className="recommend__viewAll">모두 보기</p>
        </div>
        <div className="recommend__list__allInfo">
          <div className="recommend__list__img">
            <img src="/images/Hwajong/hwajong_1.jpg" alt="" />
          </div>
          <div className="recommend__list__status">
            <p className="recommend__list__status__id">aaaaa</p>
            <p className="recommend__list__status__followerDigit">
              회원님 외에 2명이...{' '}
            </p>
          </div>
          <div className="recommend__following">
            <button>팔로우</button>
          </div>
        </div>
        <div className="recommend__list__allInfo">
          <div className="recommend__list__img">
            <img src="/images/Hwajong/hwajong_1.jpg" alt="" />
          </div>
          <div className="recommend__list__status">
            <p className="recommend__list__status__id">aaaaa</p>
            <p className="recommend__list__status__followerDigit">
              회원 외에 15명이...
            </p>
          </div>
          <div className="recommend__following">
            <button className="recommend__following__button">팔로우</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
