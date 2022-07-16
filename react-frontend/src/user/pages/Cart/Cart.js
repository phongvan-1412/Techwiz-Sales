import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import PayPal from "../../pages/Payment/PayPal";
import { submitCart } from "../../../redux/actions/cartAction";
import { useDispatch } from "react-redux";

const Cart = ({ cart, updateCart }) => {
  const [checkout, setCheckOut] = useState(false);

  let totalPayment = 0;
  cart.forEach((item) => {
    totalPayment += parseInt(
      item.product_quantity * item.product_price_per_unit
    );
  });

  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(submitCart(cart));
    alert('You order is ')
  };

  return (
    <div className="row" style={{marginTop: "30px"}}>
      <h3 className="cart-title">SHOPPING CART</h3>
      <div className="col-md-9">
        <div className="container">
          <div className="row cart-table-title-wrapper">
            <div className="col-2 cart-table-title">ITEM(S)</div>
            <div className="col-4 cart-table-title"></div>
            <div className="col-1 cart-table-title">PRICE</div>
            <div className="col-1 cart-table-title"></div>
            <div className="col-1 cart-table-title">QTY</div>
            <div className="col-1 cart-table-title"></div>
            <div className="col-2 cart-table-title">SUBTOTAL</div>
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
      <div className="col-md-3" style={{margin: "0px", padding: "0px"}}>
        <div className="container cart-summary-container">
          <div className="cart-summary-title">SUMMARY</div>
          <div className="row cart-summary-subtotal">
            <div className="col-md-6 cart-product-subtotal-title" style={{alignSelf: "center", textAlign:"center"}}>Subtotal</div>
            <div className="col-md-6 cart-product-subtotal-price" style={{alignSelf: "center", textAlign:"center"}}>{totalPayment.toLocaleString()}đ</div>
          </div>
              {checkout ? (
                
                <PayPal subtotal={totalPayment} />
              ) : (
                <div className="text-center">
                  <button className="btn-checkout"onMouseDown={() => {
                      setCheckOut(true);
                    }}  onClick={onClick}>
                        PROCEED TO CHECKOUT
                  </button> 
              </div>
              )}
              
                
        </div>
      </div>
    </div>
  );
};

export default Cart;
