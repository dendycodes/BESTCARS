import React, { useState, createContext, useEffect } from "react";

export const cartState = createContext();
export const Cartstate = (props) => {
  const [cartstate, setCartstate] = useState(
    JSON.parse(localStorage.getItem("cart")) ||
      [
        // {
        //   productID: "",
        //   productName: "",
        //   price: "",
        //   quantity: "",
        //   productPictureURL: ""
        // }
      ]
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartstate));
  }, [cartstate]);

  // console.log(globalstate);
  return (
    <cartState.Provider value={[cartstate, setCartstate]}>
      {props.children}
    </cartState.Provider>
  );
};
