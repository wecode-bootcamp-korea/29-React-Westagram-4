/*eslint-disable*/

import React, { useState, useEffect } from 'react';

import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import './Main.scss';

import Nav from '../../../components/Nav/Nav';
import Feed from './Feed/Feed';
import Aside from './Aside/Aside';

function Main() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/Jieun/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <div className="mainJieun">
      <Nav />
      <main className="section">
        <div className="feeds">
          {feedList.map((list, i) => {
            return <Feed feedList={list} key={i} />;
          })}
        </div>
        <Aside />
      </main>
    </div>
  );
}

export default Main;
