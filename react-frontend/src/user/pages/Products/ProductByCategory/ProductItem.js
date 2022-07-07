import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from 'react-icons/fa'

class ProductItem extends Component {
  render() {
    const { product_thumbnail_name, product_name, product_price, category_name } =
      this.props.product;

    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div>
          <img className="product-item-content product-img" src={require(`../../../layout/LandingPageSlider/tempImg/${product_thumbnail_name}`)} />
        </div>

        <div className="category-name">{category_name}</div>

        <div className="product-name">
          <Link to="#" className="product-name-item">{product_name}</Link>
        </div> 

        <div className="product-price">{product_price}đ</div>

        <div className="cart-icons">
          <FaShoppingCart className="meta-cart"/>
          <FaHeart  className="meta-wishlist"/>
        </div>
      </div>
    );
  }
}
ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
