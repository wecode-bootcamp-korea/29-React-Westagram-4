function ActionKeys() {
  return (
    <div className="action-keys">
      <div className="action-left-keys">
        <img className="icon" id="like" alt="like" src="/images/Pkw/like.png" />
        <img
          className="icon"
          id="comment"
          alt="comment"
          src="/images/Pkw/chat.png"
        />
        <img
          className="icon"
          id="share"
          alt="share"
          src="/images/Pkw/upload.png"
        />
      </div>
      <div className="action-right-keys">
        <img
          className="icon"
          id="bookmark"
          alt="bookmark"
          src="/images/Pkw/bookmark.png"
        />
      </div>
    </div>
  );
}

export default ActionKeys;
