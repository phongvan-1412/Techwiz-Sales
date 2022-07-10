import React, { Component } from "react";
import MainRoute from "./MainRoute";
import Header from "./user/layout/Header-Footer/Header";
import Footer from "./user/layout/Header-Footer/Footer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "./actions/productsActions";
import { getCart } from "./actions/cartAction";
import { getCategories } from './actions/categoriesActions';
import { getCategoriesRoot } from "./actions/categoryRootActions";

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
        <Header cart={cart} categoriesRoot={categoriesRoot} categories={categories} />
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8" style={{ padding: "0px", margin: "0px" }}>
            <MainRoute products={products} cart={cart} categoriesRoot={categoriesRoot} categories={categories}/>
          </div>
          <div className="col-md-2"></div>
        </div>
        <Footer />
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
