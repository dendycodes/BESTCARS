import React, { /*useState, useEffect,*/ useContext } from "react";
import "./selectedcar.scss";
import { slectedCar } from "../../Globalselectedcar";

import { globalState } from "../../Globalstate";
import { Link } from "react-router-dom";
export default function Selectedcar() {
  const [carsquantity, setCarsquantity] = useContext(globalState);
  const [selectedcar, setSelectedcar] = useContext(slectedCar);

  return (
    <>
      <div className="selectedcar" id="selectedcar">
        {/* <img src="https://img.icons8.com/ios-filled/40/ffffff/sort-up.png" /> */}

        <svg
          id="img-sa"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 172 172"
        >
          <g
            fill="none"
            fillRule="nonzero"
            stroke="none"
            strokeWidth="1"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="10"
            strokeDasharray=""
            strokeDashoffset="0"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#ff6700">
              <path d="M86,44.72l-72.24,75.68h144.48z"></path>
            </g>
          </g>
        </svg>

        <div className="content">
          {selectedcar[0].makeID.length > 0 ? (
            <div className="selected-car">
              <div className="car-header">
                <div id="selected-car-icon">
                  <img alt="" src={selectedcar[0].pictureURL} />
                </div>
                <h2>
                  {selectedcar[0].makeName} <br /> {selectedcar[1].modelName}
                </h2>
              </div>
              <hr />
              <div className="car-details">
                <b>
                  ДВИГАТЕЛ: {selectedcar[2].engine} <br />
                  ГОРИВО:{selectedcar[2].fuel}
                </b>

                <b>
                  {" "}
                  ГОДИНА: {selectedcar[2].year} <br />
                  Мощност: {selectedcar[2].power}
                </b>
              </div>

              <div
                id="cancel-car"
                onClick={() => {
                  if (localStorage.getItem("selectedCar")) {
                    setSelectedcar([
                      {
                        makeID: "",
                        makeName: "",
                        pictureURL: ""
                      },
                      {
                        modelID: "",
                        modelName: ""
                      },
                      {
                        modificationID: "",
                        engine: "",
                        fuel: "",
                        year: "",
                        power: ""
                      },
                      {
                        categoryName: "",
                        categoryID: " "
                      }
                    ]);
                    localStorage.removeItem("selectedCar");

                    document
                      .getElementById("selectedcar")
                      .classList.toggle("open");
                    setCarsquantity(0);
                  }
                  window.location.pathname = "/store";
                }}
              >
                {" "}
                Избери друг автомобил
              </div>
            </div>
          ) : (
            <div className="no-selected-car"> Няма избран автомобил </div>
          )}
        </div>
      </div>
    </>
  );
}
