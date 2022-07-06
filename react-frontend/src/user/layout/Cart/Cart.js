import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../../actions/productsActions";
import CartItem from "./CartItem";
class Cart extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h3>SHOPPING CART</h3>
            <div className="container">
              <div className="row">
                <div className="col-8">ITEM(S)</div>
                <div className="col-1">PRICE</div>
                <div className="col-1">QTY</div>
                <div className="col-2">SUBTOTAL</div>
              </div>
            </div>
            {products.map((product) => (
              <CartItem
                key={product.product_SKU}
                content={product}
              ></CartItem>
            ))}
          </div>
          <div className="col-3">
            <div className="container">
              <form action="/" method="post">
                <div>SUMARY</div>
                <div className="row">
                  <div className="col-8">Subtotal</div>
                  <div className="col-4">111111</div>
                </div>
                <div className="row">
                  <div className="col-8">Order Total</div>
                  <div className="col-4">111111</div>
                </div>
                <div className="container">
                  <button>PROCEED TO CHECKOUT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Cart.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.product.products,
});

export default connect(mapStateToProps, { getProducts })(Cart);
