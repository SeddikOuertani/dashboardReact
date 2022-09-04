import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const SearchInput = (props) => {
  const inputRef = useRef(null);

  const toggleInput = () => {
    console.log(inputRef.current)
    
    inputRef.current.focus();
  };

  // border-top-right-radius: 2rem;
  // border-bottom-right-radius: 2rem;

  return (
    <div className="search-input-wrapper">
      <div className="input-wrapper">
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder={props.Placeholder}
        />
      </div>

      <div onClick={toggleInput} className="icon-wrapper">
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </div>
    </div>
  );
};

export default SearchInput;
