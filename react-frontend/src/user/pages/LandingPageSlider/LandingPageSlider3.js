import React, { Component, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton} from 'react-icons/gi'

import { productSlideCategorySelector3 } from "../../../redux/selector/selectors";
import { productSlideCategory3 } from "../../../redux/actions/productsActions";
import ProductItem from "../../pages/Products/ProductByCategory/ProductItem";

const LandingPageSlider3 = () => {
  const ref = useRef({})

  const next = () =>{
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = { dots: false, infinite: false, speed: 350, slidesToShow: 5, slidesToScroll: 1};
  
  const localProducts = useSelector(productSlideCategorySelector3);

  const dispatch = useDispatch();
  const [horizontalState, setHorizontalState] = useState(1);

  const horizontalTab = (index) => { 
    setHorizontalState(index.target.value);
    dispatch(productSlideCategory3(index.target.name))
  };
  
    return (
        <div className=" landingpage-slider slide-title">
          <div className="slide-title top-content">
            <h4>
              <b>DRINK</b>
            </h4>
            <button value={1} name="Beer" className={ horizontalState == 1 ? "btn-category mb-2 btn-active-show" : "btn-category mb-2 btn-show"} onClick={horizontalTab}>Beer</button>
            <button value={2} name="Soft" className={ horizontalState == 2 ? "btn-category mb-2 btn-active-show" : "btn-category mb-2 btn-show"} onClick={horizontalTab}>Soft</button>
          </div>

          <Slider ref={ref} {...settings}>
            {localProducts.map((product) => (
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
    );
  }


export default LandingPageSlider3;
