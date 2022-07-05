import React, { Component } from "react";
import { Link } from "react-router-dom";

class BottomImg extends Component {
  render() {
    return (
      <div class="row panel-bottom">
          <div class="row page-content ">
            <div class="col-md-4 bottom-col-1">
              <Link to="/"><img
                  className="page-content row-panel-bottom-img"
                  src={require(`./tempImg/1.jpg`)}/>
              </Link>
            </div>

            <div class="col-md-4 bottom-col-2">
              <div class="row">

                <div class="col-md-12">
                  <Link to="/"><img
                    className="page-content row-panel-bottom-img-col2 img1"
                    src={require(`./tempImg/2.jpg`)}/>
                  </Link>
                </div>
                <div class="col-md-12" style={{marginBottom:'0px',paddingBottom:'0px'}}>
                  <Link to="/"><img
                    className="page-content row-panel-bottom-img-col2 img2"
                    src={require(`./tempImg/3.png`)}/>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-md-4 bottom-col-3">
              <Link to="/"><img
                className="page-content row-panel-bottom-img img4"
                src={require(`./tempImg/4.png`)}/>
              </Link>
            </div>
          </div>
      </div>
    );
  }
}

export default BottomImg;
