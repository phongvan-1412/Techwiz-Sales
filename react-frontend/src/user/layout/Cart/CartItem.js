import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  updateProductFromCart,
  deleteProductFromCart,
  getCart,
} from "../../../actions/cartAction";

class CartItem extends Component {
  // state = {
  //   product_quantity: 1,
  // };

  render() {
    const { item, updateCart } = this.props;
    const onChange = (event) => {
      this.props.updateProductFromCart(item, event.target.value);
    };

    return (
      <div>
        <div className="container" key={item.product_SKU}>
          <div className="row">
            <div className="col-2">
              <img
                className="page-content row-panel-img"
                src={require(`../../layout/LandingPageSlider/tempImg/${item.product_thumbnail_name}`)}
                style={{
                  width: "50%",
                  height: "auto",
                  objectFit: "center",
                  objectPosition: "center",
                }}
              />
            </div>
            <div className="col-4">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <h3>{item.product_name.replace(/-/g, " ")}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2">{item.product_price}</div>
            <div className="col-2">
              <input
                type="number"
                name="product_quantity"
                id="qty"
                max="999"
                min="1"
                step="1"
                className="input-text-qty"
                onChange={onChange}
                defaultValue={item.product_quantity}
              />
            </div>
            <div className="col-2">
              <div>
                <button onClick={updateCart}>Update items</button>
              </div>
              <div>
                <button
                  onClick={() =>
                    this.props.deleteProductFromCart(item.product_SKU)
                  }
                >
                  Remove item
                </button>
              </div>
              <div>{item.product_subtotal}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
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
})(CartItem);
