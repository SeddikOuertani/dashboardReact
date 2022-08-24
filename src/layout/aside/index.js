import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toTitleCase } from "../../utils";
import "./styles.css";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBook, faPieChart, faCircleInfo, faGear} from "@fortawesome/free-solid-svg-icons";

library.add(faBook, faPieChart, faCircleInfo, faGear);

const Aside = (props) => {
  return (
    <div className="aside">
      <ul className="aside-links link-list-1">
        {props.links.map((link, index) => {
          return (
            <li key={`${link}${index}asideLink`} className="aside-link-wrapper">
              <FontAwesomeIcon icon={link.iconName}/>
              <span className="aside-link">{toTitleCase(link.linkName)}</span>
            </li>
          );
        })}
      </ul>
      <hr></hr>
      <ul className="aside-links link-list-2">
        <li className="aside-link-wrapper">
          <i></i>
          <span className="aside-link"></span>
        </li>
        <li className="aside-link-wrapper">
          <i></i>
          <span className="aside-link"></span>
        </li>
        <li className="aside-link-wrapper">
          <i></i>
          <span className="aside-link"></span>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
