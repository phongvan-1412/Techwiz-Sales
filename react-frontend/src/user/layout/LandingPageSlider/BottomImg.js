import React, { Component } from "react";
import { Link } from "react-router-dom";


class BottomImg extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            
              <img
                className="page-content row-panel-img"
                src={require(`./tempImg/F104593_1_2746.jpg`)}
              />

          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-12">

                  <img
                    className="page-content row-panel-img"
                    src={require(`./tempImg/F122061_Lindt_Lindor_Assorted_168g_00b9_b9d5.jpg`)}
                  />

              </div>
              <div className="col-12">

                  <img
                    className="page-content row-panel-img"
                    src={require(`./tempImg/F122061_Lindt_Lindor_Assorted_168g_00b9_b9d5.jpg`)}
                  />
 
              </div>
            </div>
          </div>
          <div className="col-3">
    
              <img
                className="page-content row-panel-img"
                src={require(`./tempImg/F104593_1_2746.jpg`)}
              />
    
          </div>
        </div>
      </div>
    );
  }
}

export default BottomImg;
