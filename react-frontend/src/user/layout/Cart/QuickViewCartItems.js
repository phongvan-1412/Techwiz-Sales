import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import QuickViewCartItem from "./QuickViewCartItem";

const QuickViewCartItems = ({ cart, updateCart }) => {
  let totalPayment = 0;
  cart.forEach((item) => {
    totalPayment += parseInt(item.product_quantity * item.product_price_per_unit);
  });
  
  return (
    <div style={{ background: "gray", width: "500px" }}>
      <div>
        <h3>
          <b>YOUR PRODUCT</b>
        </h3>
      </div>
      <div>
        <div style={{ height: "200px", overflowY: "scroll" }}>
          {cart.map((item) => (
            <QuickViewCartItem
              key={item.product_SKU}
              product={item}
              updateCart={updateCart}
            ></QuickViewCartItem>
          ))}
        </div>
      </div>
      <hr />
      <div>
        <h5>
          <b>CART SUBTOTAL : {totalPayment}</b>
        </h5>
      </div>
      <div>
        <button>
          <Link to="/cart" replace>
            View Cart
          </Link>
        </button>

        <button>Check Out</button>
      </div>
    </div>
  );
};

export default QuickViewCartItems;
