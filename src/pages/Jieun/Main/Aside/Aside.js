import React from 'react';

import './Aside.scss';

function Aside() {
  return (
    <aside className="asideJieun">
      <div className="profile">
        <div className="rightProfileImg">
          <img
            className="profileImg"
            alt="프로필 사진"
            src="images/Jieun/hongseoli.jpeg"
            width="56px"
          />
        </div>
        <div className="user">
          <div className="id">
            <a href="/">hongseoli</a>
          </div>
          <div className="name">홍설이</div>
        </div>
        <div className="fontSmall">
          <a href="/">전환</a>
        </div>
      </div>

      <div className="recommend">
        <div className="for">회원님을 위한 추천</div>
        <div className="recommendItem">
          <div className="recommendImg">
            <img
              className="profileImg"
              alt="프로필 사진"
              src="images/Jieun/gyeongtaeabuji.jpeg"
              width="32px"
            />
          </div>
          <div className="item">
            <div className="id">
              <a href="/">gyeongtaeabuji</a>
            </div>
            <div className="relationship">회원님을 팔로우합니다</div>
          </div>
          <div className="fontSmall">
            <a href="/">팔로우</a>
          </div>
        </div>

        <div className="recommendItem">
          <div className="recommendImg">
            <img
              className="profileImg"
              alt="프로필 사진"
              src="images/Jieun/jrong.__.jpeg"
              width="32px"
            />
          </div>
          <div className="item">
            <div className="id">
              <a href="/">jrong.__</a>
            </div>
            <div className="relationship">회원님을 팔로우합니다</div>
          </div>
          <div className="fontSmall">
            <a href="/">팔로우</a>
          </div>
        </div>
        <div className="recommendItem">
          <div className="recommendImg">
            <img
              className="profileImg"
              alt="프로필 사진"
              src="images/Jieun/huccikang.jpeg"
              width="32px"
            />
          </div>
          <div className="item">
            <div className="id">
              <a href="/">huccikang</a>
            </div>
            <div className="relationship">회원님을 위한 추천</div>
          </div>
          <div className="fontSmall">
            <a href="/">팔로우</a>
          </div>
        </div>
        <div className="recommendItem">
          <div className="recommendImg">
            <img
              className="profileImg"
              alt="프로필 사진"
              src="images/Jieun/corgibh.jpeg"
              width="32px"
            />
          </div>
          <div className="item">
            <div className="id">
              <a href="/">corgibh</a>
            </div>
            <div className="relationship">jrong.__님이 팔로우합니다</div>
          </div>
          <div className="fontSmall">
            <a href="/">팔로우</a>
          </div>
        </div>
        <div className="recommendItem">
          <div className="recommendImg">
            <img
              className="profileImg"
              alt="프로필 사진"
              src="images/Jieun/zzangjeolmi.jpeg"
              width="32px"
            />
          </div>
          <div className="item">
            <div className="id">
              <a href="/">zzangjeolmi</a>
            </div>
            <div className="relationship">회원님을 위한 추천</div>
          </div>
          <div className="fontSmall">
            <a href="/">팔로우</a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
