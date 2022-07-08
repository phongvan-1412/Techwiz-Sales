import React, { Component, useState, useEffect } from "react";

import WrapBreadcrumbDetail from "./WrapBreadcrumbDetail";
import SidebarSuggest from "./SidebarSuggest";
import DisplayProductDetail from "./DisplayProductDetail";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class ProductDetail extends Component {
    render(){
        const { products } = this.props;
        return(
            <div className="row">
                <div className="col-lg-9 col-md-9 product-by-category-display" style={{padding: '0px', margin: '0px'}}>
                    <WrapBreadcrumbDetail products={products}/>
                    {/* <DisplayProductDetail products={products}/> */}
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12">
                    {/* <SidebarSuggest products={products}/> */}
                </div>
            </div>
            
        )
    }
}

export default ProductDetail;