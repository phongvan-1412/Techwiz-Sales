import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/style-mobile.css";
import "../../css/style-tablet.css";
import "../../css/style-laptop.css";

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
                                    <Link className="filter-link active" to="#">Breakfast
                                        <span className="count">(155)</span>
                                    </Link>
                                </li>
                                
								<li className="list-item">
                                    <Link className="filter-link " to="#">Biscuits & Cakes
                                        <span className="count">(337)</span>
                                    </Link>
                                </li>

								<li className="list-item">
                                    <Link className="filter-link " to="#">Chocolate & Confectionery
                                        <span className="count">(462)</span>
                                    </Link>
                                </li>

								<li className="list-item">
                                    <Link className="filter-link " to="#">Hot Drinks
                                        <span className="count">(312)</span>
                                    </Link>
                                </li>

								<li className="list-item">
                                    <Link className="filter-link " to="#">Spread
                                        <span className="count">(207)</span>
                                    </Link>
                                </li>
                                
								<li className="list-item">
                                    <Link className="filter-link " to="#">Baking Ingredients
                                        <span className="count">(275)</span>
                                    </Link>
                                </li>
                                
								<li className="list-item">
                                    <Link className="filter-link " to="#">Condensed Milk / Nut Milk
                                        <span className="count">(30)</span>
                                    </Link>
                                </li>

								<li className="list-item">
                                    <Link className="filter-link " to="#">Fruit Can / Snack
                                        <span className="count">(13)</span>
                                    </Link>
                                </li>
							</ul>
						</div>
					</div>

                    {/* price-widget  */}
                    <div className="widget mercado-widget filter-widget price-filter">
						<h2 className="widget-title">Price</h2>
						<div className="widget-content">
							<div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: '15%', width: '45%'}}></div>
                                <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '15%'}}></span>
                                <span tabIndex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '60%'}}></span>
                            </div>
							<p>
								<label htmlFor="amount">Price:</label>
								<input type="text" id="amount" readOnly />
								<button className="filter-submit">Filter</button>
							</p>
						</div>
					</div>

                    {/* spdiet-widget */}
                    <div className="widget mercado-widget filter-widget brand-widget">
						<h2 className="widget-title">SPECIAL DIET</h2>
						<div className="widget-content">
							<ul className="list-style vertical-list list-limited" data-show="6">

								<li className="list-item">
                                    <Link className="filter-link active" to="#">Non GMO
                                        <span className="count">(40)</span>
                                    </Link>
                                </li>

								<li className="list-item">
                                    <Link className="filter-link " to="#">Diabetic friendly
                                        <span className="count">(5)</span>
                                    </Link>
                                </li>

								<li className="list-item">
                                    <Link className="filter-link " to="#">Dairy free
                                        <span className="count">(1)</span>
                                    </Link>
                                </li>
                                
								<li className="list-item">
                                    <Link className="filter-link " to="#">Organic
                                        <span className="count">(75)</span>
                                    </Link>
                                </li>

								<li className="list-item">
                                    <Link className="filter-link " to="#">Gluten free
                                        <span className="count">(32)</span>
                                    </Link>
                                </li>

								<li className="list-item">
                                    <Link className="filter-link " to="#">Vegan
                                        <span className="count">(11)</span>
                                    </Link>
                                </li>

								<li className="list-item">
                                    <Link className="filter-link " to="#">Fair trade
                                        <span className="count">(3)</span>
                                    </Link>
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
                                    <Link className="filter-link active" to="#">IPG
                                        <span className="count">(3)</span>
                                    </Link>
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