import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav>
      <div className="nav-left">
        <img className="icon" alt="logo" src="/images/Pkw/logo.png" />
        <span className="site-logo">westagram</span>
      </div>
      <div className="nav-center">
        <input type="text" id="search-box" placeholder="검색" />
        <img className="icon" alt="magnifier" src="/images/Pkw/search.png" />
      </div>
      <div className="nav-right">
        <img className="icon" alt="compass" src="/images/Pkw/compass.png" />
        <img className="icon" alt="heart" src="/images/Pkw/like.png" />
        <img className="icon" alt="mypage" src="/images/Pkw/user.png" />
      </div>
    </nav>
  );
}

export default Nav;
