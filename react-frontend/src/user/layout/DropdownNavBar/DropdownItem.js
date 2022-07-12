import React, { Component } from "react";
import { getProductsByCategory } from "../../../actions/productsActions";
import { connect } from "react-redux";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class DropdownItem extends Component {
  render() {
    const { category_name, categories } = this.props;
    const cates = categories.filter(
      (cat) => cat.category_root_name === category_name
    );
    const onClick = (event) => {
      this.props.getProductsByCategory(event.target.name);
    };
    return (
      <div>
        <div style={{ height: "100px", position: "absolute" }}></div>
        <ul>
          {cates.map((cate) => {
            return (
              <Link
                key={cate.category_id}
                to={`/${cate.category_root_name}/${cate.category_name}`}
                name={cate.category_name}
                onClick={onClick}
              >
                <li>{cate.category_name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.product.products,
});
export default connect(mapStateToProps, {
  getProductsByCategory,
})(DropdownItem);
