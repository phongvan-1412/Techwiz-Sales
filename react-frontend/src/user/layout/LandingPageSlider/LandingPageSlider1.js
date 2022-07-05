import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../../actions/productsActions";
import LandingPageItem from "./LandingPageSliderItem";

class LandingPageSlider1 extends Component {
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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="row" style={{alignSelf:'center'}}>
        <button className="button previous col-1" onClick={this.previous} style={{alignSelf:'center',backgroundColor: '#003366', border: 'none', height:'40px',borderRadius:'10px',color:'white',fontWeight:'bold',textAlign:'center',width:'70px',padding:'0px',fontSize:'13px'}}>
          Previous
        </button>

        <div className="col-10 panel-content" style={{objectFit:'center',objectPosition:'center',alignItems:'center'}}>
          <Slider ref={(c) => (this.slider = c)} {...settings} >
            {products.map((product) => (
              <LandingPageItem
                key={product.product_SKU}
                content={product}
              ></LandingPageItem>
            ))}
          </Slider>
        </div>

        <button className="button next col-1" onClick={this.next} style={{alignSelf:'center',backgroundColor: '#003366', border: 'none', height:'40px',borderRadius:'10px',color:'white',fontWeight:'bold',textAlign:'center',width:'70px',padding:'0px',fontSize:'13px'}}>
          Next
        </button>
      </div>
    );
  }
}
LandingPageSlider1.propTypes = {
    getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    products: state.product.products,
});

export default connect(mapStateToProps, { getProducts })(LandingPageSlider1);
