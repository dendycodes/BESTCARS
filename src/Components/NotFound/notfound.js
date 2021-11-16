import React from "react";
import "./notfound.scss";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div class=" custom-404">
      <div class="not-found-bg">
        <img alt="" src="https://preview.ibb.co/d2fA19/404_error.png" />
      </div>
      <div class="search2">
        <div class="search-wrapper">
          <div class="search-help-text">
            <img alt="" src="https://image.ibb.co/hNh18p/404_worry.png" />
            <h4>Don't worry</h4>
            <p>We are here to help you out</p>
            <p>
              You may go back to:
              <Link to="/"> Home, </Link>
              <Link to="/store"> Store, </Link>
              <Link to="/cart"> Cart, </Link>
              <Link to="/"> Contacts </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
