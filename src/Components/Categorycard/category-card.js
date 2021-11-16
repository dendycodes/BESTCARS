import React from "react";
import "./category-card.scss";
import { Link } from "react-router-dom";

export default function Categorycard(props) {
  return (
    <Link
      to={`/store/${props.to}`}
      onClick={props.function}
      id={props.id}
      className="category-card"
    >
      <img alt="" className="pics" src={props.picURL}></img>
      <h3>{props.categoryName}</h3>
      <small> Промоционални цени и качество</small>
      <img
        alt=""
        src="https://img.icons8.com/ios/35/000000/circled-chevron-right.png"
      />{" "}
    </Link>
  );
}
