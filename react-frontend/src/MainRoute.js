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
import ProductDetail from "./user/pages/Products/ProductDetail/ProductDetail";

class MainRoute extends Component {
  render() {
    const { products, cart } = this.props;
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
          <Route path="/cart" element={<Cart cart={cart} />}></Route>
          <Route
            path="/updatecart"
            element={<LandingPage cart={cart} />}
          ></Route>

          {products.map((product) => (
            <Route
              key={product.product_SKU}
              path={`/${product.category_name}/${product.product_name}`}
              element={<ProductDetail product={product} products={products}/>}
            ></Route>
          ))}
          {/* {spotlights.map((spotlight) => (
            <Route
              key={spotlight.blog_id}
              path={`/${spotlight.category_name}/${spotlight.blog_title}/:spotlight.blog_id`}
              element={<Category />}
            ></Route>
          ))} */}
        </Routes>
      </div>
    );
  }
}

export default MainRoute;
