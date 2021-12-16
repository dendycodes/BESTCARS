import React from "react";
import "./searchbar.scss";

export default function Searchbar(props) {
  return (
    <div id="searchbar" className={props.class}>
      <hr />
      <div className="results">
        <p> Няма намерени резултати...</p>
      </div>
    </div>
  );
}
