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
import ContactUs from "./user/pages/Contact/ContactUs";
import ProductByCategory from "./user/pages/Products/ProductByCategory/ProductByCategory";
import Cart from "./user/layout/Cart/Cart";
import ProductDetail from "./user/pages/Products/ProductDetail/ProductDetail";

class MainRoute extends Component {
  render() {
    const { products, cart, categories, categoriesRoot } = this.props;
    return (
      <div className="container" style={{ padding: "0px", margin: "0px" }}>
        <Routes>
          <Route path="/" element={<LandingPage products={products} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>

          {/* Cart */}
          <Route path="/cart" element={<Cart cart={cart} />}></Route>
          <Route
            path="/updatecart"
            element={<LandingPage cart={cart} />}
          ></Route>

          {/* Product */}
          <Route
            path="/product"
            element={<ProductByCategory products={products} />}
          ></Route>
          
          {categories.map((category) => (
            <Route
              key={category.category_id}
              path={`/${category.category_root_name}/${category.category_name}`}
              element={<ProductByCategory categories={categories} products={products}/>}
            ></Route>
          ))}

          {categoriesRoot.map((categoryRoot) => (
            <Route
              key={categoryRoot.category_id}
              path={`/${categoryRoot.category_name}`}
              element={<ProductByCategory products={products} categories={categories} categoriesRoot={categoriesRoot}/>}
            ></Route>
          ))}

            {/* Product Detail   */}
          {products.map((product) => (
            <Route
              key={product.product_SKU}
              path={`/${product.category_name}/${product.product_name}`}
              element={<ProductDetail product={product} products={products}/>}
            ></Route>
          ))}


          
        </Routes>
      </div>
    );
  }
}

export default MainRoute;
