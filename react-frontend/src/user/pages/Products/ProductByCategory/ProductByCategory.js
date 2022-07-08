import React, { Component } from "react";
import { Link } from "react-router-dom";

import WrapBreadcrumb from "./WrapBreadcrumb";
import SidebarFilter from "./SidebarFilter";
import SortProductNav from "./SortProductNav";
import DisplayProduct from "./DisplayProduct";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class ProductByCategory extends Component{
    render(){
        const { products } = this.props;
        return(
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                    <WrapBreadcrumb products={products}/>
                    <SidebarFilter products={products}/>
                </div>
                <div className="col-lg-9 col-md-9 product-by-category-display" style={{padding: '0px', margin: '0px'}}>
                    <SortProductNav />
                    <DisplayProduct products={products}/>
                </div>
            </div>
            
        )
    }

}

export default ProductByCategory;