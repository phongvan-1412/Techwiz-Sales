import React, { Component } from "react";
import { Link } from "react-router-dom";

import WrapBreadcrumb from "./WrapBreadcrumb";
import SidebarFilter from "./SidebarFilter";
import SortProductNav from "./SortProductNav";
import DisplayProduct from "./DisplayProduct";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class ProductByCategory extends Component {
  render() {
    const { products, category, categoryRoot } = this.props;

    let currentProducts = [];
    if (category == null) {
      products.forEach((product) => {
        if (
          product.category_name.replace("-", " ") ===
          categoryRoot.category_name.replace("-", " ")
        ) {
          currentProducts = [product, ...currentProducts];
        }
      });
    } else {
      products.forEach((product) => {
        if (
          product.category_name.replace("-", " ") ===
          category.category_name.replace("-", " ")
        ) {
          currentProducts = [product, ...currentProducts];
        }
      });
    }

    const getProducts = () =>{
      
    }
    return (
      <div className="row">
        <WrapBreadcrumb
            products={currentProducts}
            category={category}
            categoryRoot={categoryRoot}
          />
        <div className="col-lg-3 col-md-3 col-sm-12">
          <SidebarFilter products={currentProducts} />
        </div>
        <div
          className="col-lg-9 col-md-9 product-by-category-display"
          style={{ padding: "0px", margin: "0px" }}
        >
          <SortProductNav />
          <DisplayProduct products={currentProducts} />
        </div>
      </div>
    );
  }
}

export default ProductByCategory;
