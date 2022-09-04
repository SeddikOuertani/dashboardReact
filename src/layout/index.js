import React from "react";
import Aside from "./aside";
import Main from "./main";
import './style.css';

const Layout = (props) => {
  return (
    <div className="layout">
      <Aside linkFontSize={"var(--small-spacing)"} links={props.data.asideLinks}></Aside>
      <Main {...props}></Main>
    </div>
  );
};

export default Layout;
