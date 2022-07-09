import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BsFillBagCheckFill } from 'react-icons/bs'
import { FaHeart } from 'react-icons/fa'
import { useState, useEffect } from "react";


const ProductDetailItem = ( {product}) => {
    const [ verticalState, setVerticalState] = useState(1);

    const verticalTab = (index) =>{
      setVerticalState(index);
    }
    return(
      <div className="product-detail-item-wrapper"style={{margin:'0px',padding:'0px'}}>

        <div className="container mb-5 product-detail-item-info" style={{margin:'0px',padding:'0px'}}>
          <div className="col-md-6 product-detail-img-wrapper">
            <img className="product-detail-img" src={require(`../../../layout/LandingPageSlider/tempImg/${product.product_thumbnail_name}`)} />
          </div>

          <div className="col-md-6 product-detail-info-wrapper">
            <div className="product-detail-product-name"><h1>{product.product_name.replace(/-/g, " ")}</h1></div>

            <div className="product-detail-info-price">
              <div className="product-detail-product-SKU">{product.product_SKU}</div>

              <div className="product-detail product-info-review-wrapper">
                <div className="reviews-action">
                  <Link to="/blog">Be the first to review this product</Link>
                </div>

                <div className="stock">
                  <BsFillBagCheckFill className="meta-instock"/>
                  <span>In Stock</span>
                </div>

              </div>
              <div className="product-detail-product-price">{product.product_price}đ</div>
            </div>
            
            <div className="product-detail-product-add-form">
              <div className="box-tocart">
                <div className="field-qty">
                  <label className="label" htmlFor="qty">
                    <span>Quantity</span>
                  </label>

                  <input type="number" name="qty" id="qty" max="12" min="1" step="1"className="input-text-qty"/>
                </div>
                  
                <div className="actions">
                  <button type="submit">
                    <span className="mr-1 meta-addtocart">Add to cart</span>
                  </button>
                  <button>
                    <FaHeart className="meta-wishlist"/>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="product-detail-description mt-5">
              <span className="description">{product.product_detail}</span> 
            </div>

          </div>
        </div>
        
        <div className="container mb-5 product-detail-item-more-info" style={{margin:'0px',padding:'0px'}}>

          <div className="card-box">

              <div className="row">
                  <div className="col-sm-3" style={{margin:'0px',paddingRight:'0px'}}>
                      <div className="nav flex-column nav-pills nav-pills-tab" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                          <Link className={verticalState === 1 ? "nav-link active show" : "nav-link"} onClick={() => verticalTab(1)} id="v-pills-home-tab" data-toggle="pill" to="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                              DETAILS</Link>
                          <Link className={verticalState === 2 ? "nav-link active show" : "nav-link"} onClick={() => verticalTab(2)} id="v-pills-profile-tab" data-toggle="pill" to="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                              INGREDIENTS</Link>
                          <Link className={verticalState === 3 ? "nav-link active show" : "nav-link"} onClick={() => verticalTab(3)} id="v-pills-messages-tab" data-toggle="pill" to="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                              INSTRUCTIONS FOR USE</Link>
                          <Link className={verticalState === 4 ? "nav-link active show" : "nav-link"} onClick={() => verticalTab(4)} id="v-pills-settings-tab" data-toggle="pill" to="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                              STORAGE INSTRUCTIONS</Link>
                          <Link className={verticalState === 5 ? "nav-link active show" : "nav-link mt-2"} onClick={() => verticalTab(5)} id="v-pills-settings-tab" data-toggle="pill" to="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false" style={{borderBottom:'none'}}>
                              REVIEWS</Link>
                      </div>
                  </div> 

                  <div className="col-sm-9">
                      <div className="tab-content pt-0">
                          <div className={verticalState === 1 ? "tab-pane fade active show" : "tab-pane fade"} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                              <span>Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt
                                  do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est eu aliqua occaecat quis et velit
                                  excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit
                                  mollit pariatur. Deserunt non laborum enim et cillum eu deserunt excepteur ea incididunt minim occaecat.</span>
                          </div>

                          <div className={verticalState === 2 ? "tab-pane fade active show" : "tab-pane fade"} role="tabpanel" aria-labelledby="v-pills-profile-tab">
                              <span>Culpa dolor voluptate do laboris laboris irure reprehenderit id incididunt duis pariatur mollit aute magna
                                  pariatur consectetur. Eu veniam duis non ut dolor deserunt commodo et minim in quis laboris ipsum velit
                                  id veniam. Quis ut consectetur adipisicing officia excepteur non sit. Ut et elit aliquip labore Lorem
                                  enim eu. Ullamco mollit occaecat dolore ipsum id officia mollit qui esse anim eiusmod do sint minim consectetur
                                  qui.</span>
                          </div>

                          <div className={verticalState === 3 ? "tab-pane fade active show" : "tab-pane fade"} id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                              <span>Fugiat id quis dolor culpa eiusmod anim velit excepteur proident dolor aute qui magna. Ad proident laboris
                                  ullamco esse anim Lorem Lorem veniam quis Lorem irure occaecat velit nostrud magna nulla. Velit et et
                                  proident Lorem do ea tempor officia dolor. Reprehenderit Lorem aliquip labore est magna commodo est ea
                                  veniam consectetur.</span>
                          </div>

                          <div className={verticalState === 4 ? "tab-pane fade active show" : "tab-pane fade"} id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                              <span>Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident
                                  in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui
                                  mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit
                                  adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.</span>
                          </div>

                          <div className={verticalState === 5 ? "tab-pane fade active show" : "tab-pane fade"} id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                              <span>Eu dolore ea ullamco dolore Lorem id cupidatat excepteur reprehenderit consectetur elit id dolor proident
                                  in cupidatat officia. Voluptate excepteur commodo labore nisi cillum duis aliqua do. Aliqua amet qui
                                  mollit consectetur nulla mollit velit aliqua veniam nisi id do Lorem deserunt amet. Culpa ullamco sit
                                  adipisicing labore officia magna elit nisi in aute tempor commodo eiusmod.</span>
                          </div>
                      </div>
                  </div> 
              </div> 
              
          </div> 

        </div>
    </div>
      
    );
}


ProductDetailItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetailItem;
