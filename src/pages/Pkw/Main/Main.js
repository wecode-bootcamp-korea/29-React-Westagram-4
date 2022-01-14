import React from "react";
import main from './main.scss'
import Article from "./Article";
import RightMenu from "./RightMenu";
import Nav from "./Nav/Nav";
// import Footer from './Footer';

function Main() {
    return (
        <div className="main-area">
            <Nav></Nav>      
            <main>
                <Article></Article>
                <RightMenu></RightMenu>
            </main>
        </div>
    );
}

export default Main;