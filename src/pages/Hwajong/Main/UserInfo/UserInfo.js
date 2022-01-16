import React from 'react';
import '../UserInfo/UserInfo.scss';

const UserInfo = () => {
  return (
    <div>
      <div className="main-right__userInfo">
        <div className="main-right__userInfo__img">
          <img src="/images/Hwajong/hwajong_1.jpg" alt="" />
        </div>
        <div className="main-right__userInfo__idName">
          <p className="main-right__userInfo__id">
            <strong>hjlee1811</strong>
          </p>
          <p className="main-right__userInfo__name">이화종</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
