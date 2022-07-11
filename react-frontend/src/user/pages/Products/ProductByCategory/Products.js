import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Product from "./Product";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";
import { render } from "react-dom";

class Products extends Component({
  products,
  categories,
  categoriesRoot,
  category,
  categoryRoot,
}) {
  // const [localProducts, setLocalProducts] = useState([]);
  // const [localCategories, setLocalCategories] = useState();
  // const [localCategoriesRoot, setLocalCategoriesRoot] = useState();

  // let filterProducts = [];

  render() {
    let filterCategories = [];
    if (categoryRoot != null) {
      categories.forEach((category) => {
        if (category.category_root_name == categoryRoot.category_name) {
          filterCategories = [category, ...filterCategories];
        }
      });
    }

    let check = false;
    if (category == null) {
      check = true;
    }
    return (
      <div>
        {check ? (
          <div className="container">
            <div className="wrap-breadcrumb">
              <ul>
                <li className="item-link">
                  <Link to="#" className="home-link">
                    HOME
                  </Link>
                </li>
                <li className="item-link">
                  <span className="categoryRoot-link">
                    {categoryRoot.category_name.replace("-", " ")}
                  </span>
                </li>
              </ul>
            </div>

            <div className="row">
              <div className="col-md-3 sidebar-filter">
                <div className="product-filter-container">
                  <div className="filter-title">Filter Products By</div>
                  {/* category-widget */}
                  <div className="widget mercado-widget filter-widget brand-widget">
                    <h2 className="widget-title">CATEGORY</h2>
                    <div className="widget-content">
                      {filterCategories.map((categoryRoot) => (
                        <ul
                          className="list-style vertical-list list-limited"
                          data-show="6"
                        >
                          <li className="list-item">
                            <Link className="filter-link active" to="#">
                              {categoryRoot.category_name.replace("-", " ")}
                              
                            </Link>
                            <span className="count"></span>
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-9 ">
                {filterProducts.map((product) => {
                  <Product key={product.product_SKU} product={product} />;
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="wrap-breadcrumb">
              <ul>
                <li className="item-link">
                  <Link to="#" className="home-link">
                    HOME
                  </Link>
                </li>
                <li className="item-link">
                  <Link to="#" className="categoryRoot-link">
                    {category.category_root_name.replace("-", " ")}
                  </Link>
                </li>
                <li className="item-link">
                  <span className="categoryName">
                    {category.category_name.replace("-", " ")}
                  </span>
                </li>
              </ul>
            </div>

            <div className="row">
              <div className="col-md-3 sidebar-filter">
                <div className="product-filter-container">
                  <div className="filter-title">Filter Products By</div>
                </div>
              </div>

              <div className="col-md-9 ">
                {filterProducts.map((product) => {
                  <Product key={product.product_SKU} product={product} />;
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Products;
