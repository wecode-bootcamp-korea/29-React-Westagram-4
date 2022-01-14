function FeedTop(props) {
  return (
    <div className="top">
      <div className="left">
        <img
          className="profile-img-m"
          id=""
          src="/images/Pkw/profile-img.png"
        />
        <span className="ids" id={props.userinfo.id}>
          {props.userinfo.id}
        </span>
      </div>
      <div className="right">
        <img className="dot-menu" src="/images/Pkw/dot-menu.png" />
      </div>
    </div>
  );
}

export default FeedTop;
