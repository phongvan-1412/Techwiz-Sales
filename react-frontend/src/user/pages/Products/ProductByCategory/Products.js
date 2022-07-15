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
import { getProductsByCategory } from "../../../../redux/actions/productsActions";
import { getCategoriesByRoot } from "../../../../redux/actions/categoriesActions";
import { useDispatch } from "react-redux";

const Products = ({ category }) => {
  const localProducts = useSelector(productSelector);
  const localCategories = useSelector(categorySelector);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

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
  const dispatch = useDispatch();
  const onClick = (event) => {
    dispatch(getProductsByCategory(event.target.name));
    dispatch(getCategoriesByRoot(event.target.name));
  };
  return (
    <div className="row">
      <div className="row" style={{ padding: "0px", margin: "0px" }}>
        {check ? (
          <div className="container" style={{ padding: "0px", margin: "0px" }}>
            <div className="row">
              {/* wrap-breadcrumb */}
              <div className="wrap-breadcrumb" style={{ margin: "50px 0px" }}>
                <ul>
                  <li className="item-link">
                    <Link replace to="/" className="home-link">
                      HOME
                    </Link>
                  </li>
                  <li className="item-link1">
                    <Link
                      to={`/${currentCate}`}
                      replace
                      onClick={onClick}
                      name={currentCate}
                    >
                      {/* <span className="categoryRoot-link1" > */}
                        {currentCate.replace("-", " ")}
                      {/* </span> */}
                    </Link>
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
                            key={cate.category_id}
                          >
                            <li className="list-item">
                              <Link
                                to={`/${cate.category_root_name}/${cate.category_name}`}
                                replace
                                onClick={onClick}
                                name={cate.category_name}
                              >
                                {cate.category_name.replace("-", " ")}
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
                <div className="row">
                  {currentProducts.map((product) => {
                    return (
                      <ProductView
                        key={product.product_SKU}
                        product={product}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container" style={{ padding: "0px", margin: "0px" }}>
            <div className="row">
              {/* wrap-breadcrumb */}
              <div className="wrap-breadcrumb" style={{ margin: "50px 0px" }}>
                <ul>
                  <li className="item-link">
                    <Link replace to="/" className="home-link">
                      HOME
                    </Link>
                  </li>
                  <li className="item-link">
                    <Link
                      to={`/${category.category_root_name}`}
                      replace
                      name={category.category_root_name}
                      onClick={onClick}
                      style={{textTransform:"uppercase"}}
                    >
                      {category.category_root_name.replace("-", " ")}
                    </Link>
                  </li>
                  <li className="item-link">
                    <span className="categoryRoot-link" >
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
                <div className="row">
                  {currentProducts.map((product) => {
                    return (
                      <ProductView
                        key={product.product_SKU}
                        product={product}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="row" style={{ padding: "0px", margin: "0px" }}>
        <div
          className="col-md-3"
          style={{ padding: "0px", margin: "0px" }}
        ></div>

        <div className="col-md-9" style={{ padding: "0px", margin: "0px" }}>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <Link
                  to="#"
                  className="page-link"
                  onClick={() => paginate(number)}
                >
                  {number}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
