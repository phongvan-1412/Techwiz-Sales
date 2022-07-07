import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from 'react-icons/fa'

class ProductItem extends Component {
  render() {
    const { product_thumbnail_name, product_name, product_price } =
      this.props.product;

    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div>
          <img
            className="product-item-content product-img"
            src={require(`../../../layout/LandingPageSlider/tempImg/${product_thumbnail_name}`)}
            
          />
        </div>
        <div className="mb-2">
          <div>{product_name}</div> 
        </div>
        <div className="mb-2">
          <div>{product_price}</div>
        </div>
        <div className="mt-1 cart-icons">
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
