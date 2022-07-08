import React, { Component } from "react";
import PropTypes from "prop-types";

class CartItem extends Component {
  render() {
    const { product_thumbnail_name, product_name, product_price } =
      this.props.content;
    const productname = product_name.replace(/-/g, " ");
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
          <div className="col-4">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h3>{product_name}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">{product_price}</div>
          <div className="col-2">quantity</div>
          <div className="col-2">{product_price}</div>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  content: PropTypes.object.isRequired,
};

export default CartItem;
