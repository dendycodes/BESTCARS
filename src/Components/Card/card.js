import React /*useContext*/ from "react";
import "./card.scss";
// import { globalState } from "../../Globalstate";
import { Link } from "react-router-dom";

export default function Card(props) {
  // const [globalstate, setGlobalstate] = useContext(globalState);

  return (
    <div className="card">
      <div className="card__description">
        <div className="badge">Hot</div>
        <Link
          onClick={() => {
            localStorage.setItem("selectedProduct", JSON.stringify(props.to));
          }}
          to={`/product/${props.to}`}
        >
          <div className="product-tumb">
            <img src={props.pictureURL} alt="" />
          </div>
        </Link>
        <div className="product-details">
          <h4>
            <Link to={`/product/${props.to}`}>
              {props.autoPartName} - {props.manufacturer}
            </Link>
          </h4>

          <div className="product-bottom-details">
            <div className="product-price">
              <small>{props.price + 14.03} </small>
              {props.price} BGN
            </div>
            <div className="btn-wrapper">
              <button
                //Adding items to the cart
                onClick={props.addtocart}
                className="add-to-cart"
              >
                <div className="btn-text">Add to cart</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
