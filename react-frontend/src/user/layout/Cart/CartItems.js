import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";;

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../../actions/productsActions";
import CartItem from "./CartItem";

class CartItems extends Component {
//   componentDidMount() {
//     this.props.getProducts();
//   }

  render() {
    // const { products } = this.props;
    return (
      <div className="container">
        <div>
          <div>
            <h3>
              <b>YOUR PRODUCT</b>
            </h3>
          </div>
          <div>
            {/* {products.map((product) => ( */}
              <CartItem key={product.product_SKU} content={product}></CartItem>
            {/* ))} */}
          </div>
          <hr />
          <div>
            <h3>
              <b>CART SUBTOTAL :</b>
            </h3>
            <h4>subtotal price</h4>
          </div>
          <div>
            <button>Check Out</button>
          </div>
        </div>
      </div>
    );
  }
}


export default CartItems;
