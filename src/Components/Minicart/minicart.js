import React, { useEffect, useState, useContext } from "react";
import "./minicart.scss";
import { cartState } from "../../CartContext";

export default function Cinicart() {
  const [cart, setCart] = useContext(cartState);
  return (
    <>
      <div className="minicart" id="minicart">
        <img
          className="trinagle-img"
          alt=""
          src="https://img.icons8.com/ios-filled/40/ffffff/sort-up.png"
        />
        <div className="content">
          <div className="pdct-box">
            {cart.map((product) => {
              return (
                <div className="pdct">
                  <img className="pdct-img" src={product.productPictureURL} />
                  <h3>{product.productName}</h3>

                  <hr />

                  <h2> {product.price} BGN </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
