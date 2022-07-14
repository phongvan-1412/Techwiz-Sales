import React, { Component, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton} from 'react-icons/gi'

import ProductItem from "../../pages/Products/ProductByCategory/ProductItem";

const LandingPageSlider1 = ({products}) => {
  const ref = useRef({})

  const next = () =>{
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = { dots: false, infinite: false, speed: 500, slidesToShow: 5, slidesToScroll: 1};
  
  const [horizontalState, setHorizontalState] = useState(1);
  const horizontalTab = (index) => { setHorizontalState(index) };
    
    return (
      <div>
        <div className="slide-title">
          <div className="slide-title top-content">
            <h4>
              <b>FEATURED PRODUCTS</b>
            </h4>
            <button className={ horizontalState === 1 ? "btn-category mb-2 btn-active-show" : "btn-category mb-2 btn-show"} onClick={() => horizontalTab(1)}>Breakfast</button>
            <button className={ horizontalState === 2 ? "btn-category mb-2 btn-active-show" : "btn-category mb-2 btn-show"} onClick={() => horizontalTab(2)}>Chocolate</button>
          </div>

          <Slider ref={ref} {...settings}>
            {products.map((product) => (
               <ProductItem 
               key={product.product_SKU}
               product={product}
             ></ProductItem>
            ))}
          </Slider>
          
          <div className="btn-click">
            <button type="button" className="btn-previous" onClick={previous}>
              <GiPreviousButton />
            </button>
            <button type="button" className=" btn-next" onClick={next}>
              <GiNextButton />
            </button>
          </div>
        </div>
      </div>
    );
  }


export default LandingPageSlider1;
