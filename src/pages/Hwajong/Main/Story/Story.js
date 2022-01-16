import React from 'react';
import '../Story/Story.scss';

const Story = () => {
  return (
    <div>
      <div className="main-right__friendsStory">
        <div className="main-right__friendsStory__title">
          <p className="friendsStory__title__story">스토리</p>
          <p className="friendsStory__title__viewAll">모두 보기</p>
        </div>
        <div className="main-right__friendsStory__list">
          <div className="friendsStory__list__allInfo">
            <div className="friendsStory__list__img">
              <img src="/images/Hwajong/hwajong_1.jpg" alt="" />
            </div>
            <div className="friendsStory__list__status">
              <p className="friendsStory__list__status__id">aaaaa</p>
              <p className="friendsStory__list__status__time">13분전</p>
            </div>
          </div>
          <div className="friendsStory__list__allInfo">
            <div className="friendsStory__list__img">
              <img src="/images/Hwajong/hwajong_1.jpg" alt="" />
            </div>
            <div className="friendsStory__list__status">
              <p className="friendsStory__list__status__id">aaaaa</p>
              <p className="friendsStory__list__status__time">13분전</p>
            </div>
          </div>
          <div className="friendsStory__list__allInfo">
            <div className="friendsStory__list__img">
              <img src="/images/Hwajong/hwajong_1.jpg" alt="" />
            </div>
            <div className="friendsStory__list__status">
              <p className="friendsStory__list__status__id">aaaaa</p>
              <p className="friendsStory__list__status__time">13분전</p>
            </div>
          </div>
          <div className="friendsStory__list__allInfo">
            <div className="friendsStory__list__img">
              <img src="/images/Hwajong/hwajong_1.jpg" alt="" />
            </div>
            <div className="friendsStory__list__status">
              <p className="friendsStory__list__status__id">aaaaa</p>
              <p className="friendsStory__list__status__time">13분전</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
