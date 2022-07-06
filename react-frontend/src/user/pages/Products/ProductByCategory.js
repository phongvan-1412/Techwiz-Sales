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
                    <SortProductNav />
                    <DisplayProduct />
                </div>
            </div>
            
        )
    }

}

export default ProductByCategory;