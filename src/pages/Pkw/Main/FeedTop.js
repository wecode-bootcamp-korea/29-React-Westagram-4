function FeedTop({ userinfo }) {
  return (
    <div className="top">
      <div className="left">
        <img
          className="profile-img-m"
          id=""
          alt="profile-img"
          src="/images/Pkw/profile-img.png"
        />
        <span className="ids" id={userinfo.id}>
          {userinfo.id}
        </span>
      </div>
      <div className="right">
        <img
          className="dot-menu"
          alt="dot-menu"
          src="/images/Pkw/dot-menu.png"
        />
      </div>
    </div>
  );
}

export default FeedTop;
