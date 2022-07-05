import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


class LandingPageItem extends Component {
  render() {
    const { product_thumbnail_name } = this.props.content;
    
    return (
      <div className="mb-3 secondary-panel">
            <img className="page-content row-panel-img" src={require(`./tempImg/${product_thumbnail_name}`)} />
      </div>
    );
  }
}
LandingPageItem.propTypes = {
  content: PropTypes.object.isRequired,
}

export default LandingPageItem;