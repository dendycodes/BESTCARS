import React from "react";
import "./offline.scss";
import Loading from "../Loading/loading";

export default function Off() {
  return (
    <div className="no-internet">
      <h1 id="loading-header">BESTCARS</h1>
      <h3 id="loading-message">
        Нямате интернет връзка моля проверете дали всичко е наред
      </h3>
      <Loading />
    </div>
  );
}
