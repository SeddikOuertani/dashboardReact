import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toTitleCase } from "../../utils";
import "./styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBook,
  faPieChart,
  faCircleInfo,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

library.add(faBook, faPieChart, faCircleInfo, faGear);

const Aside = (props) => {
  return (
    <div className="aside">
      <ul className="aside-links link-list-top">
        {props.links.topLinks.map((link, index) => {
          return (
            <li key={`${link}${index}asideLink`} className="aside-link-wrapper">
              <FontAwesomeIcon className="icon" icon={link.iconName} />
              <span className="aside-link">{toTitleCase(link.linkName)}</span>
            </li>
          );
        })}
      </ul>
      <hr></hr>
      <ul className="aside-links link-list-bottom">
        {props.links.bottomLinks.map((link, index) => {
          return (
            <li key={`${link}${index}asideLink`} className="aside-link-wrapper">
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
