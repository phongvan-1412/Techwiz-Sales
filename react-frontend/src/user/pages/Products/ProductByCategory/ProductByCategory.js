import React, { Component } from "react";
import { Link } from "react-router-dom";

import Products from "./Products";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class ProductByCategory extends Component {
  render() {
    const { products, categories, category, categoriesRoot, categoryRoot } = this.props;
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

    return (
      <div className="row">
        <Products products={currentProducts} categories={categories} category={category} categoriesRoot={categoriesRoot} categoryRoot={categoryRoot} />
      </div>
    );
  }
}

export default ProductByCategory;
