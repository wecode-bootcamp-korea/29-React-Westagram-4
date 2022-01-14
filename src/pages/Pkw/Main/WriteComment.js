import react from 'react'

function WriteComment() {
    return (
    <div className="write-comment">
        <input type="text" placeholder="댓글 달기..."/>
        <span className="write-button">게시</span>
    </div>
    );
}

export default WriteComment;