import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class SidebarFilter extends Component{
    render(){
        return(
            <div className="sidebar-filter">
                <div className="product-filter-container">
                    <div className="filter-title">Filter Products By</div>
                        {/* category-widget */}
                    <div className="widget mercado-widget filter-widget brand-widget">
                        <h2 className="widget-title">CATEGORY</h2>
                        <div className="widget-content">
                            <ul className="list-style vertical-list list-limited" data-show="6">
                                <li className="list-item">
                                    <Link className="filter-link active" to="#">Breakfast</Link>
                                    <span className="coun">(155)</span>
                                </li>
                                
                                <li className="list-item">
                                    <Link className="filter-link " to="#">Biscuits & Cakes</Link>
                                    <span className="count">(337)</span>
                                </li>

                                <li className="list-item">
                                    <Link className="filter-link " to="#">Chocolate & Confectionery</Link>
                                    <span className="count">(462)</span>
                                </li>

                                <li className="list-item">
                                    <Link className="filter-link " to="#">Hot Drinks</Link>
                                    <span className="count">(312)</span>
                                </li>

                                <li className="list-item">
                                    <Link className="filter-link " to="#">Spread</Link>
                                    <span className="count">(207)</span>
                                </li>
                                
                                <li className="list-item">
                                    <Link className="filter-link " to="#">Baking Ingredients</Link>
                                    <span className="count">(275)</span>
                                </li>
                                
                                <li className="list-item">
                                    <Link className="filter-link " to="#">Condensed Milk / Nut Milk</Link>
                                    <span className="count">(30)</span>
                                </li>

                                <li className="list-item">
                                    <Link className="filter-link " to="#">Fruit Can / Snack</Link>
                                    <span className="count">(13)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                        {/* spdiet-widget */}
                    <div className="widget mercado-widget filter-widget brand-widget">
                        <h2 className="widget-title">SPECIAL DIET</h2>
                        <div className="widget-content">
                            <ul className="list-style vertical-list list-limited" data-show="6">

                                <li className="list-item">
                                    <Link className="filter-link active" to="#">Non GMO</Link>
                                    <span className="count">(40)</span>
                                </li>

                                <li className="list-item">
                                    <Link className="filter-link " to="#">Diabetic friendly</Link>
                                    <span className="count">(5)</span>
                                </li>

                                <li className="list-item">
                                    <Link className="filter-link " to="#">Dairy free</Link>
                                    <span className="count">(1)</span>
                                </li>
                                
                                <li className="list-item">
                                    <Link className="filter-link " to="#">Organic</Link>
                                    <span className="count">(75)</span>
                                </li>

                                <li className="list-item">
                                    <Link className="filter-link " to="#">Gluten free</Link>
                                    <span className="count">(32)</span>
                                </li>

                                <li className="list-item">
                                    <Link className="filter-link " to="#">Vegan</Link>
                                    <span className="count">(11)</span>
                                </li>

                                <li className="list-item">
                                    <Link className="filter-link " to="#">Fair trade</Link>
                                    <span className="count">(3)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                        {/* specification-widget */}
                    <div className="widget mercado-widget filter-widget brand-widget">
                        <h2 className="widget-title">SPECIFICATION</h2>
                        <div className="widget-content">
                            <ul className="list-style vertical-list list-limited" data-show="6">
                                <li className="list-item">
                                    <Link className="filter-link active" to="#">IPG</Link>
                                    <span className="count">(3)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default SidebarFilter;