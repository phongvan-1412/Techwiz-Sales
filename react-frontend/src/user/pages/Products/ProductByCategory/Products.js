import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

import { useSelector } from "react-redux";
import {
  productSelector,
  categorySelector,
} from "../../../../redux/selector/selectors";

import ProductView from "./ProductView";

const Products = ({ category }) => {
  const localProducts = useSelector(productSelector);
  const localCategories = useSelector(categorySelector);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  let check = false;
  if (localCategories.length > 0) {
    check = true;
  }
  let subCate = [];
  let currentCate = "";
  localCategories.forEach((cate) => {
    subCate = [cate.category_name, ...subCate];
    currentCate = cate.category_root_name;
  });

  //Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = localProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(localProducts.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="row">
        <div className="col-12">
          {check ? (
            <div className="container">
              <div className="row">
                {/* wrap-breadcrumb */}
                <div className="wrap-breadcrumb">
                  <ul>
                    <li className="item-link">
                      <Link to="/" className="home-link">
                        HOME
                      </Link>
                    </li>
                    <li className="item-link">
                      <span className="categoryRoot-link">
                        {currentCate.replace("-", " ")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                {/* sidebar-filter  */}
                <div className="col-md-3 sidebar-filter">
                  <div className="product-filter-container">
                    <div className="filter-title">Filter Products By</div>
                    <div className="widget mercado-widget filter-widget brand-widget">
                      <h2 className="widget-title">CATEGORY</h2>
                      <div className="widget-content">
                        {localCategories.map((cate) => {
                          return (
                            <ul
                              className="list-style vertical-list list-limited"
                              data-show="6"
                            >
                              <li className="list-item">
                                <Link to="#">
                                  <span className="categoryRoot-link">
                                    {cate.category_name.replace("-", " ")}
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                {/* display-products  */}

                <div className="col-md-9">
                  {currentProducts.map((product) => {
                    return (
                      <div className="container product-by-category-display">
                        <ProductView
                          key={product.product_SKU}
                          product={product}
                        />
                        {/* <Pagination productsPerPage={productsPerPage} totalProducts={product.length} paginate={paginate}/> */}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="row">
                {/* wrap-breadcrumb */}
                <div className="wrap-breadcrumb">
                  <ul>
                    <li className="item-link">
                      <Link to="/" className="home-link">
                        HOME
                      </Link>
                    </li>
                    <li className="item-link">
                      <span className="categoryRoot-link">
                        {category.category_root_name.replace("-", " ")}
                      </span>
                    </li>
                    <li className="item-link">
                      <span className="categoryRoot-link">
                        {category.category_name.replace("-", " ")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                {/* sidebar-filter  */}
                <div className="col-md-3 sidebar-filter">
                  <div className="product-filter-container">
                    <div className="filter-title">Filter Products By</div>
                    <div className="widget mercado-widget filter-widget brand-widget">
                      <h2 className="widget-title">SPECIAL DIET</h2>
                      <div className="widget-content">
                        {localCategories.map((cate) => {
                          return (
                            <ul
                              className="list-style vertical-list list-limited"
                              data-show="6"
                            >
                              <li className="list-item">
                                <Link to="#">
                                  <span className="categoryRoot-link"></span>
                                </Link>
                              </li>
                            </ul>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* display-products  */}
                <div className="col-md-9">
                  {currentProducts.map((product) => {
                    return (
                      <div className="container product-by-category-display">
                        <ProductView
                          key={product.product_SKU}
                          product={product}
                        />
                        {/* <Pagination productsPerPage={productsPerPage} totalProducts={product.length} paginate={paginate}/> */}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="col-12">
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <button
                  to="#"
                  className="page-link"
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
