import React, { Component } from "react";

// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import CartItem from "./CartItem";

const Cart = ({cart}) =>{
  
    let subTotal = 0;
    cart.forEach((items) => {
      subTotal += parseInt(items.product_price);
    })
   
    console.log(cart);
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
              <CartItem key={item.product_SKU} items={item}></CartItem>
            ))}
          </div>
          <div className="col-3">
            <div className="container">
              <form action="/" method="post">
                <div>SUMARY</div>
                <div className="row">
                  <div className="col-8">Subtotal</div>
                  <div className="col-4">{subTotal}</div>
                </div>
                <div className="row">
                  <div className="col-8">Order Total</div>
                  <div className="col-4">{subTotal}</div>
                </div>
                <div className="container">
                  <button>PROCEED TO CHECKOUT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
// Cart.propTypes = {
//   getCart: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   cart: state.cart.cart,
// });

export default Cart;
