import React from 'react';
import './Main.scss';

function Feed() {
  return (
    <>
      <div class="feed-profile">
        <img class="profile-img" src="images/Sumin/feed_profile.jpg" />
        <div class="profile-id">yak_oruji__</div>
        <img class="more" src="images/Sumin/more.png" />
      </div>
      <img class="feed-img" src="images/Sumin/feed_image.jpeg" />
      <div class="feed-icon">
        <img class="img-icon" src="images/Sumin/heart(1).png" />
        <img class="img-icon" src="images/Sumin/chat.png" />
        <img class="img-icon upload" src="images/Sumin/upload.png" />
        <img class="img-icon save" src="images/Sumin/save-instagram.png" />
      </div>
      <div class="feed-like">좋아요 24개</div>
      <div class="feed-content">
        <div class="profile-id">yak_oruji__</div>
        <div class="content">눈사람 머랭쿠키</div>
      </div>
    </>
  );
}

export default Feed;
