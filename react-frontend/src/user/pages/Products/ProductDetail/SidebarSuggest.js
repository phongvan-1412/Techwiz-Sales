import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../../css/style-mobile.css";
import "../../../css/style-tablet.css";
import "../../../css/style-laptop.css";

class SidebarSuggest extends Component{
    render(){
        return(
            <div className="sidebar-suggest">
                <div className="">
                    <div className=""></div>
                        {/* category-widget */}
                    <div className="">
                        <h2 className="suggest-title"></h2>
                        <div className="suggest-content">
                            <ul className="">
                                <li className="list-item">
                                    <Link className="filter-link active" to="#">Breakfast</Link>
                                    <span className="coun">(155)</span>
                                </li>
                                
                            </ul>
                        </div>
                    </div>

                        {/* spdiet-widget */}
                    <div className="">
                        <h2 className="suggest-title">SPECIAL DIET</h2>
                        <div className="suggest-content">
                            <ul className="">

                                <li className="list-item">
                                    <Link className="" to="#">Non GMO</Link>
                                    <span className="count">(40)</span>
                                </li>

                            
                            </ul>
                        </div>
                    </div>

                        {/* specification-widget */}
                    <div className="">
                        <h2 className="suggest-title">SPECIFICATION</h2>
                        <div className="suggest-content">
                            <ul className="">
                                <li className="list-item">

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>    
        )
    }
}

export default SidebarSuggest;