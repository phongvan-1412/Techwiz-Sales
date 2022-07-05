import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class LandingPageItem extends Component {
  render() {
    const { product_thumbnail_name, product_name, product_price } =
      this.props.content;

    return (
      <div className="mb-3 secondary-panel">
        <div>
          <img
            className="page-content row-panel-img"
            src={require(`./tempImg/${product_thumbnail_name}`)}
            style={{
              width: "50%",
              height: "auto",
              objectFit: "center",
              objectPosition: "center",
            }}
          />
        </div>
        <div>{product_name}</div>
        <div>{product_price}</div>
      </div>
    );
  }
}
LandingPageItem.propTypes = {
  content: PropTypes.object.isRequired,
};

export default LandingPageItem;
