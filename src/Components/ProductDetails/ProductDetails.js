import React, { useEffect, useState } from "react";
import "./ProductDetails.scss";

import axios from "axios";
import Loading from "../Loading/loading";
import Notfound from "../NotFound/notfound";

export default function ProductDetails() {
  const [partdetails, setPartdetails] = useState([{ product: "none" }]);
  const [loadingstatus, setLoadingstatus] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoadingstatus(true);

    const commentUrl = `http://localhost:4000/product`;
    axios
      .get(commentUrl, {
        params: { productID: window.location.pathname.split("/")[2] }
      })
      .then((res) => {
        setPartdetails(res.data);
        setLoadingstatus(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loadingstatus === true) {
    return (
      <div className="productdetails">
        <Loading />
      </div>
    );
  }

  return (
    <div className="productdetails">
      {partdetails.length > 0 ? (
        <div className="container">
          <div className="product">
            <div className="left-side">
              <h1>
                {" "}
                {partdetails[0].autoPartName} - {partdetails[0].manufacturer}{" "}
              </h1>

              <img alt="" src={partdetails[0].pictureURL} />
              <div>
                {partdetails[0].infoDetail !== "" ? (
                  <div>
                    {" "}
                    <h3>Описание:</h3>
                    <p> {partdetails[0].infoDetail} </p>
                  </div>
                ) : (
                  <div>
                    {" "}
                    <h4 id="not-found-description">
                      Този продукт няма описание....
                    </h4>{" "}
                  </div>
                )}
              </div>
            </div>
            <div className="right-side">
              <div className="price-container">
                <small> {partdetails[0].price + 14.03}</small>
                <h1>{partdetails[0].price} BGN</h1>
              </div>

              <div className="add-to-cart2">
                <button
                  className="operation-button"
                  onClick={() => {
                    if (quantity > 1) setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <p id="input-queanttity"> {quantity} </p>

                <button
                  className="operation-button"
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
                <button id="add"> Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Notfound />
      )}
    </div>
  );
}
