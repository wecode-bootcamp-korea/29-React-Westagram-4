import React from 'react';

import Feed from './Feed/Feed';
import Story from './Story/Story';
import Recommend from './Recommend/Recommend';
import UserInfo from './UserInfo/UserInfo';
import CopyWrite from './CopyWrite/CopyWrite';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';

function Main() {
  return (
    <>
      <Nav />
      <main>
        <div className="main-content">
          <Feed />

          <div className="main-right">
            <UserInfo />
            <Story />
            <Recommend />
            <CopyWrite />
          </div>
        </div>
      </main>
    </>
  );
}
export default Main;
