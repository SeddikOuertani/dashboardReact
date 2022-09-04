import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import Logo from "../../assets/images/logo.png";
import {
  faBook,
  faPieChart,
  faCircleInfo,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toTitleCase } from "../../utils";

library.add(faBook, faPieChart, faCircleInfo, faGear);

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="aside-header">
        <img src={Logo} alt="" />
      </div>
      <ul className="aside-links link-list-top">
        {props.links.topLinks.map((link, index) => {
          return (
            <li
              key={`${link}${index}asideLink`}
              className="aside-link-wrapper"
              style={{ fontSize: props.linkFontSize }}
            >
              <Link className="link-router" to={link.linkPath}>
              <FontAwesomeIcon className="icon" icon={link.iconName} />
              <span className="aside-link">{toTitleCase(link.linkName)}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <hr></hr>
      <ul className="aside-links link-list-bottom">
        {props.links.bottomLinks.map((link, index) => {
          return (
            <li key={`${link}${index}asideLink`} style={{fontSize : props.linkFontSize}} className="aside-link-wrapper">
              <FontAwesomeIcon className="icon" icon={link.iconName} />
              <span className="aside-link">{toTitleCase(link.linkName)}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Aside;
