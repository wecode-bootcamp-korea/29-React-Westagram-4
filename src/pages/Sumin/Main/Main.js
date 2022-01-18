import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from '../../Sumin/Main/Feed';
import MainRight from '../../Sumin/Main/Main-right';
import Comments from '../../Sumin/Main/Comments';
import './Main.scss';

function Main() {
  return (
    <>
      <Nav />
      <div className="sumin-main">
        <main>
          <div className="feeds">
            <article>
              <Feed />
              <Comments />
            </article>
          </div>
          <MainRight />
        </main>
      </div>
    </>
  );
}

export default Main;
