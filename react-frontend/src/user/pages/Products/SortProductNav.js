import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/style-mobile.css";
import "../../css/style-tablet.css";
import "../../css/style-laptop.css";

class SortProductNav extends Component{
    render() {
      return (
        <div class="wrap-shop-control">
            <div class="wrap-right">
                <div class="sort-item orderby ">
                    <select name="orderby" class="use-chosen" >
                        <option value="menu_order" selected="selected">Default sorting</option>
                        <option value="price">Sort by price: low to high</option>
                        <option value="price-desc">Sort by price: high to low</option>
                    </select>
                </div>

                <div class="sort-item product-per-page">
                    <select name="post-per-page" class="use-chosen" >
                        <option value="12" selected="selected">12 per page</option>
                        <option value="24">24 per page</option>
                        <option value="36">36 per page</option>
                    </select>
                </div>
            </div>
        </div>
      )
    }
}

export default SortProductNav;