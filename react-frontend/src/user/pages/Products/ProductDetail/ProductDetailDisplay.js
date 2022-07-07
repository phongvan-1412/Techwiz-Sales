import React, { Component } from "react";
import { Link } from "react-router-dom";

import WrapBreadcrumb from "../ProductByCategory/WrapBreadcrumb";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class ProductDetailDisplay extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-9">
                    <WrapBreadcrumb />
                </div>
                <div className="col-md-3">

                </div>
            </div>
            
        )
    }

}

export default ProductDetailDisplay;