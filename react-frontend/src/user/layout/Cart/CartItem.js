import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { updateProductFromCart } from "../../../actions/cartAction";

class CartItem extends Component {
  state = {
    product_quantity : '',
  };

  render() {
    const { items } = this.props;
    const onChange = (item) => {
      this.props.updateProductFromCart(item, this.state.product_quantity);
    };
    const onClick = (event) => {
      this.setState({ product_quantity: event.target.value });
    };
    return (
      <div>
        {items.map((item) => (
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
                  onChange={onChange.bind(this, item)}
                  onClick={onClick}
                  onBlur={onChange.bind(this, item)}
                  defaultValue={item.product_quantity}
                />
              </div>
              <div className="col-2">{item.product_subtotal}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

CartItem.propTypes = {
  items: PropTypes.array.isRequired,
  updateProductFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});
export default connect(mapStateToProps, { updateProductFromCart })(CartItem);
