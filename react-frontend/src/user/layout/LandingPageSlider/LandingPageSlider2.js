import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton} from 'react-icons/gi'

import ProductItem from "../../pages/Products/ProductByCategory/ProductItem";

class LandingPageSlider2 extends Component {

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
              <b>FRESH FOOD</b>
            </h4>
            <button>Fruit</button>
            <button>Meat</button>
          </div>

          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {products.map((product) => (
               <ProductItem 
               key={product.product_SKU}
               product={product}
             ></ProductItem>
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

export default LandingPageSlider2;
