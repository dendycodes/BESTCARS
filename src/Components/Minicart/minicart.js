import React, { useEffect, useState, useContext } from "react";
import "./minicart.scss";
import { cartState } from "../../CartContext";

export default function Cinicart() {
  const [cart, setCart] = useContext(cartState);
  return (
    <>
      <div className="minicart" id="minicart">
        <svg
          className="trinagle-img"
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
          <div className="cart-title"> Виж детайли и финализирай поръчката</div>
          <div className="pdct-box">
            {cart.map((product) => {
              return (
                <div className="pdct">
                  <img className="pdct-img" src={product.productPictureURL} />

                  <div>
                    <p>
                      {product.productName} <br />
                      <b>
                        {" "}
                        {product.selectedcar[0].makeName +
                          "  " +
                          product.selectedcar[1].modelName}{" "}
                      </b>
                    </p>

                    <h3>
                      {" "}
                      {(product.price * product.quantity).toFixed(2)} BGN{" "}
                    </h3>
                  </div>
                  <p>
                    {" "}
                    <b> {product.quantity}бр. </b>{" "}
                  </p>
                  <img
                    className="rmv-item"
                    src="https://img.icons8.com/ios-glyphs/30/000000/macos-close.png"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
