import React, { useState, useContext, useEffect } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import Minicart from "../Minicart/minicart";
import Selectedcar from "../SelectedCar/selectedcar";
import { globalState } from "../../Globalstate";
import { cartState } from "../../CartContext";
import Searchbar from "../Searchbar/searchbar";
export default function Navbar() {
  const [active, setActive] = useState("not-active");
  const [carsquantity /*setCarsquantity*/] = useContext(globalState);
  const [cart, setCart] = useContext(cartState);
  const [opened, setOpened] = useState("");
  const [searchstate, setSearchstate] = useState("closedSearchbar");

  useEffect(() => {
    if (opened) {
      document.getElementById("minicart").classList.remove("open");
      document.getElementById("selectedcar").classList.remove("open");
      document.getElementById(opened).classList.toggle("open");
    }
  }, [opened]);

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
            <h1 id="title">BESTCARS</h1>
            <div id="search" className="search">
              <form>
                <input
                  onFocus={() => {
                    setSearchstate("Searchbar");
                  }}
                  onBlur={() => {
                    setSearchstate("closedSearchbar");
                  }}
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
              <div
                tabIndex="1"
                onFocus={() => {
                  setOpened("minicart");
                  document.getElementById("minicart").classList.add("open");
                }}
                onBlur={() => {
                  setOpened("minicart");
                  document.getElementById("minicart").classList.remove("open");
                }}
              >
                {" "}
                <img
                  alt="cart-icon"
                  className="cart-icon"
                  src="https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart--v1.png"
                />
                {cart.length > 0 ? (
                  <div id="cart-quantity"> {cart.length}</div>
                ) : (
                  <div className="zero">0</div>
                )}{" "}
                <Minicart />
              </div>

              <div
                tabIndex="1"
                onFocus={() => {
                  setOpened("selectedcar");
                  document.getElementById("selectedcar").classList.add("open");
                }}
                onBlur={() => {
                  setOpened("selectedcar");
                  document
                    .getElementById("selectedcar")
                    .classList.remove("open");
                }}
              >
                <img
                  alt="cart-icon"
                  className="cart-icon"
                  src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/30/ffffff/external-garage-automobile-kiranshastry-solid-kiranshastry-1.png"
                />
                {carsquantity === 1 ? (
                  <div id="cars-quantity">{carsquantity}</div>
                ) : (
                  <div className="zero"> {carsquantity}</div>
                )}

                <Selectedcar />
              </div>

              <div onClick={hamburgerState} className={"btn " + active}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <Searchbar class={searchstate} />

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
        </div>
      </div>
    </>
  );
}
