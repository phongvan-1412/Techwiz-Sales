import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { GrUpdate } from 'react-icons/gr'
import { FaTrash } from 'react-icons/fa'

import {
  updateProductFromCart,
  deleteProductFromCart,
  getCart,
} from "../../../redux/actions/cartAction";

class CartItem extends Component {
  render() {
    const { item, updateCart } = this.props;
    const onChange = (event) => {
      this.props.updateProductFromCart(item, event.target.value);
    };

    return (
      <div className="container" key={item.product_SKU}>
        <div className="row product-item-wrapper">
          <div className="col-md-2 cart-img-wrapper">
            <img
              className="cart-img"
              src={require(`../../../../../LaravelAPI/public/ProductImage/${item.product_img_name}`)}
            />
          </div>

          <div className="col-md-4" style={{alignSelf:"center"}}>
            <h3 className="cart-product-name">{item.product_name.replace(/-/g, " ")}</h3>
          </div>

          <div className="col-md-2" style={{alignSelf:"center"}}>
            <span className="cart-product-price">{(parseInt(item.product_price_per_unit)).toLocaleString()}đ</span>
          </div>

          <div className="col-md-2" style={{alignSelf:"center"}}>
            <input
              type="number"
              name="product_quantity"
              id="qty"
              max="12"
              min="1"
              step="1"
              className="input-text-qty"
              onChange={onChange}
              defaultValue={item.product_quantity}
            />
          </div>
          <div className="col-md-2" style={{alignSelf:"center"}}>
            <div className="cart-checkout-icons">
              <Link to="#"><GrUpdate classname="meta-update" onClick={updateCart} /></Link>
              <Link to="#"><FaTrash classname="meta-trash" onClick={() => this.props.deleteProductFromCart(item.product_SKU)} style={{color: "black"}}/></Link>
            </div>
            <div className="cart-product-total">{(item.product_quantity * item.product_price_per_unit).toLocaleString()}đ</div>
          </div>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  updateProductFromCart: PropTypes.func.isRequired,
  deleteProductFromCart: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});
export default connect(mapStateToProps, {
  updateProductFromCart,
  deleteProductFromCart,
  getCart,
})(CartItem);
