import ActionKeys from "./ActionKeys";
import FeedPhotos from "./FeedPhotos";
import FeedTop from "./FeedTop";
import TextContent from "./TextContent";
import WriteComment from "./WriteComment";

function Article () {
    return (
        <div className="feeds">
            <article id="feed-01">
                <FeedTop
                    userinfo={{id: 'pkw.may', }}
                    >
                </FeedTop>
                <FeedPhotos></FeedPhotos>
                <ActionKeys></ActionKeys>
                <TextContent></TextContent>
                <WriteComment></WriteComment>
            </article>
        </div>
            

    );
}

export default Article;