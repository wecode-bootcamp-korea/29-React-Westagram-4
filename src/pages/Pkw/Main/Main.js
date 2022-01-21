import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Article from './Article';
import RightMenu from './RightMenu';
import './Main.scss';

function Main() {
  return (
    <div className="main-area">
      <Nav />
      <main>
        <Article />
        <RightMenu />
      </main>
    </div>
  );
}

export default Main;
