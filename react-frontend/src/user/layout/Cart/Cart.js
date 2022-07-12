import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import CartItem from "./CartItem";
import PayPal from "../../pages/Payment/PayPal";

const Cart = ({ cart, updateCart }) => {
  const [checkout, setCheckOut] = useState(false);

  let totalPayment = 0;
  cart.forEach((item) => {
    totalPayment += parseInt(item.product_subtotal);
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-9">
          <h3>SHOPPING CART</h3>
          <div className="container">
            <div className="row">
              <div className="col-8">ITEM(S)</div>
              <div className="col-1">PRICE</div>
              <div className="col-1">QTY</div>
              <div className="col-2">SUBTOTAL</div>
            </div>
          </div>
          <div>{cart.length === 0 && <div>Cart is empty</div>}</div>
          {cart.map((item) => (
            <CartItem
              key={item.product_SKU}
              item={item}
              updateCart={updateCart}
            ></CartItem>
          ))}
        </div>
        <div className="col-3">
          <div className="container">
            <form action="/" method="post">
              <div>SUMARY</div>
              <div className="row">
                <div className="col-8">Subtotal</div>
                <div className="col-4">{totalPayment}</div>
              </div>
              <div className="row">
                <div className="col-8">Order Total</div>
                <div className="col-4">{totalPayment}</div>
              </div>
              <div className="container">
                {checkout ? (
                  <PayPal subtotal={totalPayment} />
                ) : (
                  <button
                    onMouseDown={() => {
                      setCheckOut(true);
                    }}
                  >
                    <Link to="/checkout">PROCEED TO PAYMENT </Link>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
