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
                <span>{categoryRoot.category_name}</span>
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
                <span>{category.category_root_name}</span>
              </li>
              <li className="item-link">
                <span>{category.category_name}</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default WrapBreadcrumb;
