import React, { useState, useRef } from "react";
import Logo from "../../assets/images/logo.png";
import BurgerMenu from "../../components/burgermenu";
import Sidedrawer from "../sidedrawer";
import "./styles.css";

const Navbar = (props) => {
  const [sidedrawerToggled, toggleSidedawer] = useState(true);

  const handleSidedrawer = () => {
    toggleSidedawer(!sidedrawerToggled);
  };

  const sidedrawerRef = useRef(null)


  return (
    <header className="navigation-bar">
      <Sidedrawer Ref={sidedrawerRef} sidedrawerToggled={sidedrawerToggled} links={props.links} />
      <img src={Logo} alt="" />
      <nav>
        <ul>
          {props.links.map((link, index) => {
            return (
              <li key={`navbar-link${index}`}>{link.linkName.toUpperCase()}</li>
            );
          })}
        </ul>
      </nav>
      <BurgerMenu toggleFunction={handleSidedrawer} />
    </header>
  );
};

export default Navbar;
