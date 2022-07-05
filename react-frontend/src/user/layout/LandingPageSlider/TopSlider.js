import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TopSlider extends Component {
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
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed :3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
    };
    return (
      <div className="row" style={{ background: "gray"}}>
        <div className="col-3">
          {/* <button
            type="button"
            class="slick-prev"
            style={{ backgroundColor: "red", height: "100px", width: "100px",marginLeft:"200px"}}
            onClick={this.previous}
          >
            Previous
          </button> */}
        </div>
        <div className="col-6">
          <Slider ref={(c) => (this.slider = c)}{...settings}>
            <img
              className="page-content row-panel-img"
              src={require(`./tempImg/banner-ecom-1920x900-loyalty-app.jpg`)}
              style={{width: '10%', height: 'auto'}}
            />
            <img
              className="page-content row-panel-img"
              src={require(`./tempImg/EN-grab-agm-ecom-1920x900.jpg`)}
              style={{width: '10%', height: 'auto'}}
            />
          </Slider>
        </div>
        <div className="col-3">
          {/* <button
            type="button"
            class="slick-next"
            style={{ backgroundColor: "red", height: "100px", width: "100px" ,marginRight:"200px"}}
            onClick={this.next}
          >
            Next
          </button> */}
        </div>
      </div>
    );
  }
}

export default TopSlider;
