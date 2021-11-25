import React, { useState, createContext, useEffect } from "react";

export const globalState = createContext();
export const Globalstate = (props) => {
  const [globalstate, setGlobalstate] = useState(
    JSON.parse(localStorage.getItem("garage")) || 0
  );

  useEffect(() => {
    localStorage.setItem("garage", globalstate);
  }, [globalstate]);

  // console.log(globalstate);
  return (
    <globalState.Provider value={[globalstate, setGlobalstate]}>
      {props.children}
    </globalState.Provider>
  );
};
