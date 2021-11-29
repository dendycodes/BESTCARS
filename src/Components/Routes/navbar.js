import React, { useState, useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import Minicart from "../Minicart/minicart";
import Selectedcar from "../SelectedCar/selectedcar";
import { globalState } from "../../Globalstate";
import { cartState } from "../../CartContext";
export default function Navbar() {
  const [active, setActive] = useState("not-active");
  const [carsquantity /*setCarsquantity*/] = useContext(globalState);
  const [cart, setCart] = useContext(cartState);

  const hamburgerState = () => {
    if (active === "not-active") {
      setActive("active");
    } else {
      setActive("not-active");
    }
  };

  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="content">
            <h1>BESTCARS</h1>
            <div id="search" className="search">
              <form>
                <input
                  placeholder="Търсене по име на продукт"
                  type="text"
                  spellCheck="false"
                />
              </form>

              <Icon
                className="search-icon"
                path={mdiMagnify}
                title="Search"
                size={1}
                color="WHITE"
              />
            </div>
            <div className="navigation-rightside">
              <img
                alt="cart-icon"
                className="cart-icon"
                onClick={() => {
                  document.getElementById("minicart").classList.toggle("open");
                }}
                src="https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart--v1.png"
              />

              {cart.length > 0 ? (
                <div
                  onClick={() => {
                    document
                      .getElementById("minicart")
                      .classList.toggle("open");
                  }}
                  id="cart-quantity"
                >
                  {" "}
                  {cart.length}
                </div>
              ) : (
                <div className="zero">0</div>
              )}

              <img
                onClick={() => {
                  document
                    .getElementById("selectedcar")
                    .classList.toggle("open");
                }}
                alt="cart-icon"
                className="cart-icon"
                src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/30/ffffff/external-garage-automobile-kiranshastry-solid-kiranshastry-1.png"
              />

              {carsquantity === 1 ? (
                <div
                  onClick={() => {
                    document
                      .getElementById("selectedcar")
                      .classList.toggle("open");
                  }}
                  id="cars-quantity"
                >
                  {carsquantity}
                </div>
              ) : (
                <div className="zero"> {carsquantity}</div>
              )}

              <div onClick={hamburgerState} className={"btn " + active}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <Minicart />

          <Selectedcar />
        </div>
      </div>

      <div className={"links" + active + "-menu"}>
        <div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/store">
              <li>Store</li>
            </Link>
            <Link to="/cart">
              <li>Cart</li>
            </Link>

            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </>
  );
}
