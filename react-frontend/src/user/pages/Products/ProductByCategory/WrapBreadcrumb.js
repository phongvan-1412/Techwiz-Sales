import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class WrapBreadcrumb extends Component{
    render(){
        return(
            <div className="wrap-breadcrumb">
                <ul>
                    <li className="item-link"><Link to="#" className="home-link">HOME</Link></li>
                    <li className="item-link"><span>SWEET GROCERY</span></li> {/* {$category_root_name} */}
                </ul>
            </div>
 
        )
    }
}

export default WrapBreadcrumb;