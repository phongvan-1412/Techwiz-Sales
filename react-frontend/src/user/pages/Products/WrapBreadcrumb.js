import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/style-mobile.css";
import "../../css/style-tablet.css";
import "../../css/style-laptop.css";

class WrapBreadcrumb extends Component{
    render(){
        return(
            <div>
                <div class="wrap-breadcrumb">
                    <ul>
                        <li class="item-link"><Link to="#" class="home-link">HOME</Link></li>
                        <li class="item-link"><span>SWEET GROCERY</span></li>
                    </ul>
                </div>
            </div> 
        )
    }
}

export default WrapBreadcrumb;