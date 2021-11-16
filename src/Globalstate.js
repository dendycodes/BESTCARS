import React, { useState, createContext, useEffect } from "react";

export const globalState = createContext();
export const Globalstate = (props) => {
  const [globalstate, setGlobalstate] = useState();

  useEffect(() => {
    if (localStorage.getItem("selectedCar")) {
      setGlobalstate(1);
    }
  }, []);

  // console.log(globalstate);
  return (
    <globalState.Provider value={[globalstate, setGlobalstate]}>
      {props.children}
    </globalState.Provider>
  );
};
