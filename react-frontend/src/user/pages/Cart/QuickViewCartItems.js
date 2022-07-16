import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import QuickViewCartItem from "./QuickViewCartItem";
import { submitCart } from "../../../redux/actions/cartAction";
import { useDispatch } from "react-redux";
import { FaSyncAlt } from "react-icons/fa";
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
    <div className="quick-view-cart">
      <div>
        <h3 className="quick-view-cart-title">
          <b>YOUR PRODUCT</b>
        </h3>
        <h3 className="quick-view-cart-price">
          <b>PRICE</b>
        </h3>
        <hr />
      </div>
      <div>
        <div className="quick-view-cart-items">
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
        <div className="row">
          <div className="col-6 quick-view-cart-subtotal-title">
            <h5>
              <b>CART SUBTOTAL: </b>
            </h5>
          </div>
          <div className="col-4 ">
            <h5 className="quick-view-cart-subtotal">
              {totalPayment.toLocaleString()}đ
            </h5>
          </div>
        </div>
      </div>

      <div className="container">
        <hr />
        <div className="row">
          <div>
            <button className="col-12 btn-view-cart">
              <Link to="/cart" replace>
                View Cart
              </Link>
            </button>
          </div>
          <div className="col-12">
            <button className="btn-check-out" onClick={onClick}>
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewCartItems;
