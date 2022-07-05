import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton} from 'react-icons/gi'

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../../actions/productsActions";
import LandingPageItem from "./LandingPageSliderItem";

class LandingPageSlider3 extends Component {
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
      <div>
        <div>
          <div  className="slide-title">
            <h4>
              <b>FEATURED PRODUCTS</b>
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
          <div className="btn-click">
            <button type="button" className="btn-previous" onClick={this.previous}>
              <GiPreviousButton />
            </button>
            <button type="button" className=" btn-next" onClick={this.next}>
              <GiNextButton />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
LandingPageSlider3.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { getProducts })(LandingPageSlider3);
