import React from "react";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const LogoutButton = (props) => {
  return (
    <div className="logout-btn-wrapper">
      <FontAwesomeIcon className="logout-icon" icon={faSignOut} />
    </div>
  );
};

export default LogoutButton;
