import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../../actions/productsActions";
import LandingPageItem from "./LandingPageSliderItem";

class LandingPageSlider2 extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const { products } = this.props;

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div>
            <h4>
              <b>FRESH FOOD</b>
            </h4>
          </div>

          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {products.map((product) => (
              <LandingPageItem
                key={product.product_SKU}
                content={product}
              ></LandingPageItem>
            ))}
          </Slider>
          <div>
            <button
              type="button"
              style={{
                marginLeft: "400px",
              }}
              onClick={this.previous}
            >
              Previous
            </button>
            <button type="button" onClick={this.next}>
              Next
            </button>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    );
  }
}
LandingPageSlider2.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { getProducts })(LandingPageSlider2);
