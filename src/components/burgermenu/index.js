import React from "react";
import './style.css'
const BurgerMenu = (props) => {
  return (
    <div onClick={props.toggleFunction} className="burger-menu open-button">
      <div className="burger-layer" />
      <div className="burger-layer" />
      <div className="burger-layer" />
    </div>
  );
};

export default BurgerMenu;
