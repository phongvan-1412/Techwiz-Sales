import React, { Component } from "react";
import { Link } from "react-router-dom";

class BottomImg extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 ">
          <div class="row align-item-center">
            <div class="col-md-4 pr-0">
              <img
                className="page-content row-panel-img"
                src={require(`./tempImg/1.jpg`)}
                style={{ width: "100%" }}
              />
            </div>
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-12 mb-2">
                  <img
                    className="page-content row-panel-img"
                    src={require(`./tempImg/2.jpg`)}
                    style={{ width: "100%" }}
                  />
                </div>
                <div class="col-md-12">
                  <img
                    className="page-content row-panel-img"
                    src={require(`./tempImg/3.png`)}
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4 pl-0">
              <img
                className="page-content row-panel-img"
                src={require(`./tempImg/4.png`)}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    );
  }
}

export default BottomImg;
