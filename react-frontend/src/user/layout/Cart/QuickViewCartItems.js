import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import QuickViewCartItem from "./QuickViewCartItem";
import { submitCart } from "../../../redux/actions/cartAction";
import { useDispatch } from "react-redux";

const QuickViewCartItems = ({ cart, updateCart }) => {
  let totalPayment = 0;
  cart.forEach((item) => {
    totalPayment += parseInt(
      item.product_quantity * item.product_price_per_unit
    );
  });

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(submitCart(cart));
  };

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

        <button onClick={onClick}>Check Out</button>
      </div>
    </div>
  );
};

export default QuickViewCartItems;
