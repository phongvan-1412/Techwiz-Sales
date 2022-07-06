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
                <div className="col-md-3">
                    <WrapBreadcrumb />
                    <SidebarFilter />
                </div>
                <div className="col-md-9">
                    {/* <SortProductNav /> */}
                    <DisplayProduct />
                </div>
            </div>
            
        )
    }
    

/* <section class="col-lg-12">
    <div class="product-container">
        <div class="row">

            <!-- filter-bar -->

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