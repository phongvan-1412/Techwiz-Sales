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
          <Link to={`/${category_name}/${product_name}`} replace className="product-name-item"><img className="product-item-content product-img" src={require(`../../../layout/LandingPageSlider/tempImg/${product_thumbnail_name}`)} /></Link>
        </div>

        <div className="category-name">{category_name.replace(/-/g, " ")}</div>

        <div className="product-name">
          <Link to={`/${category_name}/${product_name}`} replace className="product-name-item">{product_name.replace(/-/g, " ")}</Link>
        </div> 

        <div className="product-price">{product_price}đ</div>

        <div className="cart-icons">
          
          <Link to="#"><FaShoppingCart className="meta-cart"/></Link>
          <Link to="#"><FaHeart  className="meta-wishlist"/></Link>

          
        </div>
      </div>
    );
  }
}
ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
