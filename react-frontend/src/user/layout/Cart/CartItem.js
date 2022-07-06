import React, { Component } from "react";
import PropTypes from "prop-types";

class CartItem extends Component {
  render() {
    const { product_thumbnail_name, product_name, product_price } =
      this.props.content;
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              className="page-content row-panel-img"
              src={require(`../../layout/LandingPageSlider/tempImg/${product_thumbnail_name}`)}
              style={{
                width: "50%",
                height: "auto",
                objectFit: "center",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="col-7">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3>title</h3>
                </div>
                <div className="col-12">
                  <h6>Qty</h6>
                  <input type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">{product_price}</div>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  content: PropTypes.object.isRequired,
};

export default CartItem;
