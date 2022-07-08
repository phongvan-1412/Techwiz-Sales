import React, { Component } from "react";
import PropTypes from "prop-types";

class CartItem extends Component {
  state = {
    product_quantity: "",
  };

  onChange = () => {
    const { product_quantity } = this.state;
    const newQuantity = {product_quantity}
    this.setState({product_quantity: newQuantity});
  };
  render() {
    const { items } = this.props;
    console.log(items);

    return (
      <div>
        {items.map((item) => (
          <div className="container" key={item.product_name}>
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
                  step={1}
                  value={item.product_quantity}
                  style={{ width: "100px", textAlign: "right" }}
                  name="product_quantity"
                  onChange={this.onChange}
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
};

export default CartItem;
