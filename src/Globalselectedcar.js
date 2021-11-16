import React, { useState, createContext, useEffect } from "react";

export const slectedCar = createContext();
export const Selectedcar = (props) => {
  const [selectedcar, setSelectedcar] = useState(
    JSON.parse(localStorage.getItem("selectedCar")) || [
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
        categoryID: ""
      }
    ]
  );

  console.log(selectedcar);
  useEffect(() => {
    localStorage.setItem("selectedCar", JSON.stringify(selectedcar));
  }, [selectedcar]);

  console.log(selectedcar);
  return (
    <slectedCar.Provider value={[selectedcar, setSelectedcar]}>
      {props.children}
    </slectedCar.Provider>
  );
};
