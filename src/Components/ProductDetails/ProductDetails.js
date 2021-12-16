import React, { useEffect, useState, useContext } from "react";
import "./ProductDetails.scss";
import { cartState } from "../../CartContext";
import axios from "axios";
import Loading from "../Loading/loading";
import Notfound from "../NotFound/notfound";
import { slectedCar } from "../../Globalselectedcar";

export default function ProductDetails() {
  const [partdetails, setPartdetails] = useState([{ product: "none" }]);
  const [loadingstatus, setLoadingstatus] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useContext(cartState);
  const [selectedcar /*setSelectedcar*/] = useContext(slectedCar);

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

  console.log(partdetails);

  return (
    <div className="productdetails">
      {partdetails.length > 0 ? (
        <div className="container">
          <div className="product">
            <div className="left-side">
              <h1>
                {" "}
                {partdetails[0].autoPartName} - {partdetails[0].manufacturer}
                {"  за "}
                {selectedcar[0].makeName} {selectedcar[1].modelName}
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
              <div>
                <p>
                  {" "}
                  Номер на продукт: <b>
                    {partdetails[0].partNumber}
                  </b> <br /> <br />
                  Производител: <b>{partdetails[0].manufacturer}</b>
                </p>
              </div>

              <div>
                <div className="price-container">
                  <small> {partdetails[0].price + 14.03}</small>
                  <h1>{partdetails[0].price} BGN</h1>
                </div>

                <p>
                  Цена с вкл. ДДС 20%, <br /> без разходи за доставка (Цена за
                  брой)
                </p>

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
                  <button
                    id="add"
                    onClick={() => {
                      setCart(() => {
                        return [
                          ...cart,
                          {
                            productID: partdetails[0]._id,
                            productName: partdetails[0].autoPartName,
                            price: partdetails[0].price,
                            quantity: quantity,
                            productPictureURL: partdetails[0].pictureURL,
                            selectedcar: selectedcar
                          }
                        ];
                      });
                      alert("Succesfully added to cart");
                      setQuantity(1);
                    }}
                  >
                    {" "}
                    Add to cart
                  </button>
                </div>
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
