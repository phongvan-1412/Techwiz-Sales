import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
// import Category from "./user/pages/Category/Category";
// import Content from "./user/layout/Content/Content";
// import HomeContent from "./user/pages/Home/HomeContent";
// import Login from "../src/user/pages/Login-Register/Login";
// import Register from "../src/user/pages/Login-Register/Register";

import LandingPage from "./user/layout/LandingPageSlider/LandingPage";
import About from "./user/pages/About";
import ContactUs from "./user/pages/ContactUs";
import ProductByCategory from "./user/pages/Products/ProductByCategory/ProductByCategory";
import Cart from "./user/layout/Cart/Cart";
import ProductDetailDisplay from "./user/pages/Products/ProductDetail/ProductDetailDisplay";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "./actions/productsActions";

class MainRoute extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props;
    console.log(products);

    return (
      <div className="container" style={{ padding: "0px", margin: "0px" }}>
        <Routes>
          <Route path="/" element={<LandingPage products={products} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route
            path="/product"
            element={<ProductByCategory products={products} />}
          ></Route>
          <Route
            path="/productdetail"
            element={<ProductDetailDisplay products={products} />}
          ></Route>{" "}
          {/* <Route path="/productdetail:product_name" component={<ProductDetailDisplay />}></Route> */}
          <Route path="/cart" element={<Cart />}></Route>
          {/* {spotlights.map((spotlight) => (
            <Route
              key={spotlight.blog_id}
              path={`/${spotlight.category_name}/${spotlight.blog_title}/${spotlight.blog_id}}`}
              element={<Content />}
            ></Route>
          ))}
          {spotlights.map((spotlight) => (
            <Route
              key={spotlight.blog_id}
              path={`/${spotlight.category_name}/${spotlight.blog_title}/:spotlight.blog_id`}
              element={<Category />}
            ></Route>
          ))} */}
          {/* <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route> */}
        </Routes>
      </div>
    );
  }
}
MainRoute.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { getProducts })(MainRoute);
