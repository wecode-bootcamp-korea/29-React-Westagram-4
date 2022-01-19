/*eslint-disable*/

import React from 'react';

import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import './Main.scss';

import Nav from '../../../components/Nav/Nav';
import Feed from './Feed/Feed';
import Aside from './Aside/Aside';

function Main() {
  return (
    <div className="mainJieun">
      <Nav />
      <main className="section">
        <div className="feeds">
          <Feed />
          <Feed />
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default Main;
