import React, { useState, useEffect } from "react";

// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import CartItem from "./CartItem";
import PayPal from "../../pages/Payment/PayPal";

const Cart = ({ cart }) => {
  const [subTotal, setSubTotal] = useState([]);
  const [ checkout, setCheckOut ] = useState(false);

  useEffect(() => {
    const fetchProducts = () => {
      let tmp = 0;

      cart.forEach((item) => {
        tmp += parseInt(item.product_subtotal);
      });
      setSubTotal(tmp);
    };

    fetchProducts();
  }, []);

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
            <CartItem key={item.product_SKU} item={item}></CartItem>
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
                {checkout ? (<PayPal />) : (<button onClick={()=> {setCheckOut(true);}}>PROCEED TO CHECKOUT</button>)} 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
