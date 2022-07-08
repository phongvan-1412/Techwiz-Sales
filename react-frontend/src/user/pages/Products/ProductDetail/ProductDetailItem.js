import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from 'react-icons/fa'

class ProductDetailItem extends Component {
  render (){
    const { product } = this.props;
    return(
      <div className="">
        <div>
          <img className="product-item-content product-img" src={require(`../../../layout/LandingPageSlider/tempImg/${product.product_thumbnail_name}`)} />
        </div>

        <div className="category-name">{product.category_name.replace(/-/g, " ")}</div>

        <div className="product-name">
          <Link to="#" className="product-name-item">{product.product_name.replace(/-/g, " ")}</Link>
        </div> 

        <div className="product-price">{product.product_price}đ</div>

        <div className="cart-icons">
          <FaShoppingCart className="meta-cart"/>
          <FaHeart  className="meta-wishlist"/>
        </div>
      </div>
    );
  }
}

ProductDetailItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetailItem;
