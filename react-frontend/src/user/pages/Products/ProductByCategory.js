import React, { Component } from "react";
import { Link } from "react-router-dom";

import WrapBreadcrumb from "./WrapBreadcrumb";
import SidebarFilter from "./SidebarFilter";
import SortProductNav from "./SortProductNav";
import DisplayProduct from "./DisplayProduct";

import "../../css/style-mobile.css";
import "../../css/style-tablet.css";
import "../../css/style-laptop.css";

class ProductByCategory extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    <WrapBreadcrumb />
                    {/* <SidebarFilter /> */}
                </div>
                <div className="col-md-6">
                    {/* <SortProductNav />
                    <DisplayProduct /> */}
                </div>
            </div>
            
        )
    }
    

/* <section class="col-lg-12">
    <div class="product-container">
        <div class="row">

            <!-- filter-bar -->
            
            <div class="col-lg-3 col-md-4 order-1 col-left-sidebar">
                <div class="product-filter-container">
                    <div class="filter-title">Filter Products By</div>
                    <!-- category-widget -->
                    <div class="widget mercado-widget filter-widget brand-widget">
						<h2 class="widget-title">CATEGORY</h2>
						<div class="widget-content">
							<ul class="list-style vertical-list list-limited" data-show="6">
								<li class="list-item">
                                    <a class="filter-link active" href="#">Breakfast
                                        <span class="count">(155)</span>
                                    </a>
                                </li>
                                
								<li class="list-item">
                                    <a class="filter-link " href="#">Biscuits & Cakes
                                        <span class="count">(337)</span>
                                    </a>
                                </li>

								<li class="list-item">
                                    <a class="filter-link " href="#">Chocolate & Confectionery
                                        <span class="count">(462)</span>
                                    </a>
                                </li>

								<li class="list-item">
                                    <a class="filter-link " href="#">Hot Drinks
                                        <span class="count">(312)</span>
                                    </a>
                                </li>

								<li class="list-item">
                                    <a class="filter-link " href="#">Spread
                                        <span class="count">(207)</span>
                                    </a>
                                </li>
                                
								<li class="list-item">
                                    <a class="filter-link " href="#">Baking Ingredients
                                        <span class="count">(275)</span>
                                    </a>
                                </li>
                                
								<li class="list-item">
                                    <a class="filter-link " href="#">Condensed Milk / Nut Milk
                                        <span class="count">(30)</span>
                                    </a>
                                </li>

								<li class="list-item">
                                    <a class="filter-link " href="#">Fruit Can / Snack
                                        <span class="count">(13)</span>
                                    </a>
                                </li>
							</ul>
						</div>
					</div>

                    <!-- price-widget -->
                    <div class="widget mercado-widget filter-widget price-filter">
						<h2 class="widget-title">Price</h2>
						<div class="widget-content">
							<div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                                <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 15%; width: 45%;"></div>
                                <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 15%"></span>
                                <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 60%"></span>
                            </div>
							<p>
								<label for="amount">Price:</label>
								<input type="text" id="amount" readonly>
								<button class="filter-submit">Filter</button>
							</p>
						</div>
					</div>

                    <!-- spdiet-widget -->
                    <div class="widget mercado-widget filter-widget brand-widget">
						<h2 class="widget-title">SPECIAL DIET</h2>
						<div class="widget-content">
							<ul class="list-style vertical-list list-limited" data-show="6">

								<li class="list-item">
                                    <a class="filter-link active" href="#">Non GMO
                                        <span class="count">(40)</span>
                                    </a>
                                </li>

								<li class="list-item">
                                    <a class="filter-link " href="#">Diabetic friendly
                                        <span class="count">(5)</span>
                                    </a>
                                </li>

								<li class="list-item">
                                    <a class="filter-link " href="#">Dairy free
                                        <span class="count">(1)</span>
                                    </a>
                                </li>
                                
								<li class="list-item">
                                    <a class="filter-link " href="#">Organic
                                        <span class="count">(75)</span>
                                    </a>
                                </li>

								<li class="list-item">
                                    <a class="filter-link " href="#">Gluten free
                                        <span class="count">(32)</span>
                                    </a>
                                </li>

								<li class="list-item">
                                    <a class="filter-link " href="#">Vegan
                                        <span class="count">(11)</span>
                                    </a>
                                </li>

								<li class="list-item">
                                    <a class="filter-link " href="#">Fair trade
                                        <span class="count">(3)</span>
                                    </a>
                                </li>
							</ul>
						</div>
					</div>

                    <!-- specification-widget -->
                    <div class="widget mercado-widget filter-widget brand-widget">
						<h2 class="widget-title">SPECIFICATION</h2>
						<div class="widget-content">
							<ul class="list-style vertical-list list-limited" data-show="6">
								<li class="list-item">
                                    <a class="filter-link active" href="#">IPG
                                        <span class="count">(3)</span>
                                    </a>
                                </li>
							</ul>
						</div>
					</div>
                </div>
            </div>

            <div class="col-lg-9 col-md-8 order-2 col-right-main">
                <div class="product-content-container">
                    <!-- toolbar-top -->
                    <div class="wrap-shop-control">
                        <h1 class="shop-title">FEATURED PRODUCT</h1>

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
       
                    <!-- main-content -->
                    <div class="row">
                        <ul class="product-list grid-products equal-container">

                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="product product-style-3 equal-elem ">
                                    <div class="product-thumnail">
                                        <a href="#" title="Camembert Raw Milk AOP (250g)">
                                            <figure><img src="{{asset('img/product/SKUF104174.jpg')}}" alt="Camembert Raw Milk AOP (250g)"></figure>
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="#" class="product-name">Camembert Raw Milk AOP (250g)</a>
                                        <div class="wrap-price"><span class="product-price">158.000đ</span></div>
                                        <a href="#" class="btn add-to-cart" title="Add To Cart">Add To Cart</a>
                                        <a href="#" class="btn add-to-wishlist" title="Add To Wish List">Add To Wish List</a>
                                    </div>
                                </div>
                            </li>

                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="product product-style-3 equal-elem ">
                                    <div class="product-thumnail">
                                        <a href="#" title="Absolute Organic Coconut Cream BPA Free(400g)">
                                            <figure><img src="{{asset('img/product/SKUF144663(3).jpg')}}" alt="Absolute Organic Coconut Cream BPA Free(400g)"></figure>
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="#" class="product-name"><span>Absolute Organic Coconut Cream BPA Free(400g)</span></a>
                                        <div class="wrap-price"><span class="product-price">171.000đ</span></div>
                                        <a href="#" class="btn add-to-cart" title="Add To Cart">Add To Cart</a>
                                        <a href="#" class="btn add-to-wishlist" title="Add To Wish List">Add To Wish List</a>
                                    </div>
                                </div>
                            </li>

                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="product product-style-3 equal-elem ">
                                    <div class="product-thumnail">
                                        <a href="#" title="Balance Dark Chocolate Bar 35g">
                                            <figure><img src="{{asset('img/product/SKUF119627(1).jpg')}}" alt="Balance Dark Chocolate Bar 35g"></figure>
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="#" class="product-name"><span>Balance Dark Chocolate Bar 35g</span></a>
                                        <div class="wrap-price"><span class="product-price">63.000đ</span></div>
                                        <a href="#" class="btn add-to-cart" title="Add To Cart">Add To Cart</a>
                                        <a href="#" class="btn add-to-wishlist" title="Add To Wish List">Add To Wish List</a>
                                    </div>
                                </div>
                            </li>

                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="product product-style-3 equal-elem ">
                                    <div class="product-thumnail">
                                        <a href="#" title="Absolute Organic Lentils (400g)">
                                            <figure><img src="{{asset('img/product/SKUF144669(1).jpg')}}" alt="Absolute Organic Lentils (400g)"></figure>
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="#" class="product-name"><span>Absolute Organic Lentils (400g)</span></a>
                                        <div class="wrap-price"><span class="product-price">99.000đ</span></div>
                                        <a href="#" class="btn add-to-cart" title="Add To Cart">Add To Cart</a>
                                        <a href="#" class="btn add-to-wishlist" title="Add To Wish List">Add To Wish List</a>
                                    </div>
                                </div>
                            </li>

                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="product product-style-3 equal-elem ">
                                    <div class="product-thumnail">
                                        <a href="#" title="VNHP Aus Black Angus Tomahawk Portion">
                                            <figure><img src="{{asset('img/product/SKUF151302.jpg')}}" alt="VNHP Aus Black Angus Tomahawk Portion"></figure>
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="#" class="product-name"><span>VNHP Aus Black Angus Tomahawk Portion</span></a>
                                        <div class="wrap-price"><span class="product-price">1.292.500đ</span></div>
                                        <a href="#" class="btn add-to-cart" title="Add To Cart">Add To Cart</a>
                                        <a href="#" class="btn add-to-wishlist" title="Add To Wish List">Add To Wish List</a>
                                    </div>
                                </div>
                            </li>

                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="product product-style-3 equal-elem ">
                                    <div class="product-thumnail">
                                        <a href="#" title="Blackberry">
                                            <figure><img src="{{asset('img/product/SKUF158700.jpg')}}" alt="Blackberry"></figure>
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="#" class="product-name"><span>Blackberry</span></a>
                                        <div class="wrap-price"><span class="product-price">85.000đ</span></div>
                                        <a href="#" class="btn add-to-cart" title="Add To Cart">Add To Cart</a>
                                        <a href="#" class="btn add-to-wishlist" title="Add To Wish List">Add To Wish List</a>
                                    </div>
                                </div>
                            </li>

                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="product product-style-3 equal-elem ">
                                    <div class="product-thumnail">
                                        <a href="#" title="Dragon Fruit Pink (650g)">
                                            <figure><img src="{{asset('img/product/SKUF137012.jpg')}}" alt="Dragon Fruit Pink (650g)"></figure>
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="#" class="product-name"><span>Dragon Fruit Pink (650g)</span></a>
                                        <div class="wrap-price"><span class="product-price">25.350đ</span></div>
                                        <a href="#" class="btn add-to-cart" title="Add To Cart">Add To Cart</a>
                                        <a href="#" class="btn add-to-wishlist" title="Add To Wish List">Add To Wish List</a>
                                    </div>
                                </div>
                            </li>

                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="product product-style-3 equal-elem ">
                                    <div class="product-thumnail">
                                        <a href="#" title="Dabo Body Wash Soft Milk - Whitening (750ml)">
                                            <figure><img src="{{asset('img/product/SKUH102947.jpg')}}" alt="Dabo Body Wash Soft Milk - Whitening (750ml)"></figure>
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="#" class="product-name"><span>Dabo Body Wash Soft Milk - Whitening (750ml)</span></a>
                                        <div class="wrap-price"><span class="product-price">168.000đ</span></div>
                                        <a href="#" class="btn add-to-cart" title="Add To Cart">Add To Cart</a>
                                        <a href="#" class="btn add-to-wishlist" title="Add To Wish List">Add To Wish List</a>
                                    </div>
                                </div>
                            </li>

                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="product product-style-3 equal-elem ">
                                    <div class="product-thumnail">
                                        <a href="#" title="Homemade Panini Bread (PC)">
                                            <figure><img src="{{asset('img/product/SKUF104174.jpg')}}" alt="Homemade Panini Bread (PC)"></figure>
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="#" class="product-name"><span>Homemade Panini Bread (PC)</span></a>
                                        <div class="wrap-price"><span class="product-price">15.000đ</span></div>
                                        <a href="#" class="btn add-to-cart" title="Add To Cart">Add To Cart</a>
                                        <a href="#" class="btn add-to-wishlist" title="Add To Wish List">Add To Wish List</a>
                                    </div>
                                </div>
                            </li>

                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="product product-style-3 equal-elem ">
                                    <div class="product-thumnail">
                                        <a href="#" title="Bjorg Organic Biscuit Buckwheat Chocolate (250g)">
                                            <figure><img src="{{asset('img/product/SKUF158110(1).jpg')}}" alt="Bjorg Organic Biscuit Buckwheat Chocolate (250g)"></figure>
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="#" class="product-name"><span>Bjorg Organic Biscuit Buckwheat Chocolate (250g)</span></a>
                                        <div class="wrap-price"><span class="product-price">212.000đ</span></div>
                                        <a href="#" class="btn add-to-cart" title="Add To Cart">Add To Cart</a>
                                        <a href="#" class="btn add-to-wishlist" title="Add To Wish List">Add To Wish List</a>
                                    </div>
                                </div>
                            </li>

                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="product product-style-3 equal-elem ">
                                    <div class="product-thumnail">
                                        <a href="#" title="Do Food Tom Yum Soup Aluminium Foil 200g">
                                            <figure><img src="{{asset('img/product/SKUF160607(1).jpg')}}" alt="Do Food Tom Yum Soup Aluminium Foil 200g"></figure>
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="#" class="product-name"><span>Do Food Tom Yum Soup Aluminium Foil 200g</span></a>
                                        <div class="wrap-price"><span class="product-price">125.000đ</span></div>
                                        <a href="#" class="btn add-to-cart" title="Add To Cart">Add To Cart</a>
                                        <a href="#" class="btn add-to-wishlist" title="Add To Wish List">Add To Wish List</a>
                                    </div>
                                </div>
                            </li>

                            <li class="col-lg-6 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="product product-style-3 equal-elem ">
                                    <div class="product-thumnail">
                                        <a href="#" title="Annam Gourmet Wahoo Fillet">
                                            <figure><img src="{{asset('img/product/SKUF151451.jpg')}}" alt="Annam Gourmet Wahoo Fillet"></figure>
                                        </a>
                                    </div>
                                    <div class="product-info">
                                        <a href="#" class="product-name"><span>Annam Gourmet Wahoo Fillet</span></a>
                                        <div class="wrap-price"><span class="product-price">361.000đ</span></div>
                                        <a href="#" class="btn add-to-cart" title="Add To Cart">Add To Cart</a>
                                        <a href="#" class="btn add-to-wishlist" title="Add To Wish List">Add To Wish List</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- pagination-info -->
                    <div class="wrap-pagination-info">
                        <ul class="page-numbers">
                            <li><span class="page-number-item current" >1</span></li>
                            <li><a class="page-number-item" href="#" >2</a></li>
                            <li><a class="page-number-item" href="#" >3</a></li>
                            <li><a class="page-number-item next-link" href="#" >Next</a></li>
                        </ul>
                        <p class="result-count">Showing 1-8 of 12 result</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section> */
}

export default ProductByCategory;