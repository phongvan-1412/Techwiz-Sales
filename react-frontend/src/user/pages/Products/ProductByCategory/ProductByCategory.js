import React, { Component } from "react";
import { Link } from "react-router-dom";

import Products from "./Products";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";


const ProductByCategory = ({
  categories,
  category,
  categoriesRoot,
  categoryRoot,
}) => {

  return (
    <div className="row">
      <Products
        categories={categories}
        category={category}
        categoriesRoot={categoriesRoot}
        categoryRoot={categoryRoot}
      />
    </div>
  );
};

export default ProductByCategory;
