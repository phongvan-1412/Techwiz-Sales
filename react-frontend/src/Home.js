import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "./actions/productsActions";
import { getCart } from "./actions/cartAction";
import { getCategories } from './actions/categoriesActions';
import { getCategoriesRoot } from "./actions/categoryRootActions";

import HomePage from "./HomePage";
class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.getCart();
    this.props.getCategoriesRoot();
    this.props.getCategories();
  }

  render() {
    const { products, cart, categories, categoriesRoot } = this.props;
    return (
      <div>
        <HomePage products={products} cart={cart} categories={categories} categoriesRoot={categoriesRoot} />
      </div>
    );
  }
}
Home.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired,
  getCategoriesRoot: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  products: state.product.products,
  cart: state.cart.cart,
  categoriesRoot: state.categoriesRoot.categoriesRoot,
  categories: state.categories.categories
});

export default connect(mapStateToProps, { getProducts, getCart, getCategoriesRoot, getCategories })(Home);
