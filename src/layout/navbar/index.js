import React, { useState } from "react";
import SearchInput from "../../components/searchinput";
import LogoutButton from "../../components/logoutbutton";
import "./styles.css";
import { removeSlash, toTitleCase } from "../../utils";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="navigation-bar"> 
      <div className="page-name">
          {location.pathname ? toTitleCase(removeSlash(location.pathname)) : "no path"}
        </div>
      <nav className="nav">
        <SearchInput />
        <LogoutButton />
      </nav>
    </div>
  );
};

export default Navbar;
