import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CartItems = () => {
  return (
    <div
      className="container"
      style={{
        marginLeft: "0px",
        marginTop: "25px",
        background: "gray",
        position: "absolute",
        width: "300px",
      }}
    >
      <div>
        <div>
          <h3>
            <b>YOUR PRODUCT</b>
          </h3>
        </div>
        <div>sdfadfasdf</div>
        <hr />
        <div>
          <h5>
            <b>CART SUBTOTAL :</b>
          </h5>
          <h5>subtotal price</h5>
        </div>
        <div>
          <button>
            <Link to="/cart" replace>
              Shipping
            </Link>
          </button>

          <button>Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
