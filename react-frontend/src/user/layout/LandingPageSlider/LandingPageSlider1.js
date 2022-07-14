import React, { Component, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiNextButton, GiPreviousButton} from 'react-icons/gi'

import { productSlideCategorySelector1 } from "../../../redux/selector/selectors";
import ProductItem from "../../pages/Products/ProductByCategory/ProductItem";

const LandingPageSlider1 = ({ products }) => {
  const ref = useRef({})

  const next = () =>{
    ref.current.slickNext();
  };

  const previous = () => {
    ref.current.slickPrev();
  };

  const settings = { dots: false, infinite: false, speed: 500, slidesToShow: 5, slidesToScroll: 1};
  
  const localProducts = useSelector(productSlideCategorySelector1);
  const dispatch = useDispatch();
  const [horizontalState, setHorizontalState] = useState(1);

  // const localCategories = useSelector(categorySelector);

  // let subCate = [];
  // let currentCate = "";
  // localCategories.forEach((cate) => {
  //   subCate = [cate.category_name, ...subCate];
  //   currentCate = cate.category_root_name;
  // });

  const horizontalTab = (index) => { 
    setHorizontalState(index) = (dispatch) => {
      dispatch(productSlideCategorySelector1(index.target.value))
    }; // console.log(index.target.value)
  };
  
    return (
      <div>
        <div className="slide-title">
          <div className="slide-title top-content">
            <h4>
              <b>SWEET GROCERY</b>
            </h4>
            <button value="Breakfast" className={ horizontalState === 1 ? "btn-category mb-2 btn-active-show" : "btn-category mb-2 btn-show"} onClick={() => horizontalTab(1)}>Breakfast</button>
            <button value="Chocolate" className={ horizontalState === 2 ? "btn-category mb-2 btn-active-show" : "btn-category mb-2 btn-show"} onClick={() => horizontalTab(2)}>Chocolate</button>
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
      </div>
    );
  }


export default LandingPageSlider1;
