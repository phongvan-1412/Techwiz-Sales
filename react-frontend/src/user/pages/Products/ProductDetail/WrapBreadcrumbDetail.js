import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class WrapBreadcrumbDetail extends Component{
    render(){
        const {  product_name, category_name } = this.props.content;
        return(
            <div className="wrap-breadcrumb">
                <ul>
                    <li className="item-link"><Link to="#" className="home-link">HOME</Link></li>
                    <li className="item-link"><Link to="#">{category_name}</Link></li>
                    <li className="item-link"><span>{product_name}</span></li>
                </ul>
            </div>
 
        )
    }
}

WrapBreadcrumbDetail.propTypes = {
    content: PropTypes.object.isRequired,
};

export default WrapBreadcrumbDetail;