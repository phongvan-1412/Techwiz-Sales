import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from 'react-icons/fa'

class ProductItem extends Component {
  render() {
    const { product_thumbnail_name, product_name, product_price } =
      this.props.product;

    return (
      <div className="secondary-panel">
        <div>
          <img
            className="page-content row-panel-img"
            src={require(`../../../layout/LandingPageSlider/tempImg/${product_thumbnail_name}`)}
          />
        </div>
        <div>{product_name}</div>
        <div>{product_price}</div>
        <div className="cart-icons">
          <FaShoppingCart />
          <FaHeart  />
        </div>
      </div>
    );
  }
}
ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
