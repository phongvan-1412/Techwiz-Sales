import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class WrapBreadcrumb extends Component {
  render() {
    const { category, categoryRoot } = this.props;
    console.log(category);
    console.log(categoryRoot);

    let check = false;
    if (category == null) {
      check = true;
    }
    return (
      <div>
        {check ? (
          <div className="wrap-breadcrumb">
            <ul>
              <li className="item-link">
                <Link to="#" className="home-link">
                  HOME
                </Link>
              </li>
              <li className="item-link">
                <span className="categoryRoot-link">{categoryRoot.category_name.replace("-", " ")}</span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="wrap-breadcrumb">
            <ul>
              <li className="item-link">
                <Link to="#" className="home-link">
                  HOME
                </Link>
              </li>
              <li className="item-link">
                <Link to="#" className="categoryRoot-link">{category.category_root_name.replace("-", " ")}</Link>
              </li>
              <li className="item-link">
                <span className="categoryName">{category.category_name.replace("-", " ")}</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default WrapBreadcrumb;
