import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  updateProductFromCart,
  deleteProductFromCart,
  getCart,
} from "../../../redux/actions/cartAction";

class QuickViewCartItem extends Component {
  render() {
    const { product, updateCart } = this.props;
    const onChange = (event) => {
      this.props.updateProductFromCart(product, event.target.value);
    };

    return (
      <div>
        <div className="container" key={product.product_SKU}>
          <div className="row">
            <div className="col-2">
              <img
                className="page-content row-panel-img"
                src={require(`../../layout/LandingPageSlider/tempImg/${product.product_thumbnail_name}`)}
                style={{
                  width: "150%",
                  height: "auto",
                  objectFit: "center",
                  objectPosition: "center",
                }}
              />
            </div>
            <div className="col-6">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h6>{product.product_name.replace(/-/g, " ")}</h6>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <span>{"QTy  "}</span>
                        <input
                          type="number"
                          name="product_quantity"
                          id="qty"
                          max="999"
                          min="1"
                          step="1"
                          className="input-text-qty"
                          onChange={onChange}
                          defaultValue={product.product_quantity}
                        />
                      </div>
                      <div className="col-6">
                        <button onClick={updateCart}>Update items</button>
                        <button
                          onClick={() =>
                            this.props.deleteProductFromCart(
                              product.product_SKU
                            )
                          }
                        >
                          Remove item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div>{product.product_subtotal}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
QuickViewCartItem.propTypes = {
  product: PropTypes.object.isRequired,
  updateProductFromCart: PropTypes.func.isRequired,
  deleteProductFromCart: PropTypes.func.isRequired,
  getCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});
export default connect(mapStateToProps, {
  updateProductFromCart,
  deleteProductFromCart,
  getCart,
})(QuickViewCartItem);
