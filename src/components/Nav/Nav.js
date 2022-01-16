import React from 'react';
import './nav.scss';

function Nav() {
  return (
    <nav>
      <div className="nav-left">
        <img
          className="icon"
          id="logo-img"
          alt="logo"
          src="/images/Pkw/logo.png"
        />
        <span className="site-logo">westagram</span>
      </div>
      <div className="nav-center">
        <input type="text" id="search-box" placeholder="검색" />
        <img
          className="icon"
          id="magnifier"
          alt="magnifier"
          src="/images/Pkw/search.png"
        />
      </div>
      <div className="nav-right">
        <img
          className="icon"
          id="compass"
          alt="compass"
          src="/images/Pkw/compass.png"
        />
        <img
          className="icon"
          id="current-feed"
          alt="heart"
          src="/images/Pkw/like.png"
        />
        <img
          className="icon"
          id="mypage"
          alt="mypage"
          src="/images/Pkw/user.png"
        />
      </div>
    </nav>
  );
}

export default Nav;
