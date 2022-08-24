import React, { useEffect } from "react";
import Logo from "../../assets/images/logo.png";
import SidedrawerBg from "../../assets/images/sidedrawer_bg.webp";
import "./styles.css";

const Sidedrawer = (props) => {

  const sidedrawerToggled = props.sidedrawerToggled;
  const sidedrawerRef = props.Ref;
  useEffect(()=>{
    if(sidedrawerToggled){
      sidedrawerRef.current.style.transform = `translateX(75vw)`
    }
    else{
      sidedrawerRef.current.style.transform = `translateX(0)`
    }
  },[sidedrawerToggled, sidedrawerRef])

  return (
    <div ref={sidedrawerRef} className="sidedrawer">
      <img alt="" className="img-cover" src={SidedrawerBg} />
      <div className="sidedrawer-header">
        <img src={Logo} alt="" />
      </div>

      <div className="sidedrawer-content">
        {props.links.map((link, index) => {
          return (
            <div key={`siderawer-linkgroup${index}`} className="link-group">
              <h2>{link.linkName.toUpperCase()}</h2>
              <div className="sublink-list">
                {link.sublinks.map((sublink, index) => {
                  return (
                    <div key={`siderawer-sublink${index}`} className="sublink">
                      {sublink.toUpperCase()}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidedrawer;
