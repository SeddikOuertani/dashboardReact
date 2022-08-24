import React from "react";
import Aside from "./aside";
import Main from "./main";
import Navbar from "./navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar links={props.data.links}></Navbar>
      <Aside links={props.data.asideLinks}></Aside>
      <Main></Main>
    </>
  );
};

export default Layout;
