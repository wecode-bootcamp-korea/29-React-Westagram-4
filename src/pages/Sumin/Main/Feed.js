import React from 'react';
import './Main.scss';

function Feed() {
  return (
    <>
      <div className="feed-profile">
        <img
          className="profile-img"
          alt="profile img"
          src="images/Sumin/feed_profile.jpg"
        />
        <div className="profile-id">yak_oruji__</div>
        <img className="more" alt="more" src="images/Sumin/more.png" />
      </div>
      <img
        className="feed-img"
        alt="feed img"
        src="images/Sumin/feed_image.jpeg"
      />
      <div className="feed-icon">
        <img className="img-icon" alt="heart" src="images/Sumin/heart(1).png" />
        <img className="img-icon" alt="chat" src="images/Sumin/chat.png" />
        <img
          className="img-icon upload"
          alt="upload"
          src="images/Sumin/upload.png"
        />
        <img
          className="img-icon save"
          alt="save"
          src="images/Sumin/save-instagram.png"
        />
      </div>
      <div className="feed-like">좋아요 24개</div>
      <div className="feed-content">
        <div className="profile-id">yak_oruji__</div>
        <div className="content">눈사람 머랭쿠키</div>
      </div>
    </>
  );
}

export default Feed;
