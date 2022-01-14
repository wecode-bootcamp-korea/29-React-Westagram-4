import React from 'react';
import main from './Main.scss';
import Article from './Article';
import RightMenu from './RightMenu';
import Nav from '../../../components/Nav/Nav';

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
