import { Link } from "react-router-dom";
import React, { Component } from "react";
import DropdownItem from "./DropdownItem";
import { getProductsByCategory } from "../../../actions/productsActions";
import { connect } from "react-redux";

class Dropdown extends Component {
  render() {
    const { categoriesRoot, categories } = this.props;
    const onClick = (event) => {
      this.props.getProductsByCategory(event.target.name);
    };
    return (
      <div>
        <div style={{ height: "100px", position: "absolute" }}></div>
        <div>
          <ul
            className="services-submenu"
            style={{
              background: "black",
              width: "800px",
              marginLeft: "-100px",
              marginTop: "20px",
              position: "absolute",
            }}
          >
            <div className="container">
              <div className="row">
                {categoriesRoot.map((category) => {
                  return (
                    <div className="col-3" key={category.category_id}>
                      <div className="row">
                        <div className="col-12">
                          <Link
                            to={category.category_name}
                            style={{ cursor: "pointer" }}
                            name={category.category_name}
                            onClick={onClick}
                          >
                            {category.category_name.replace("-", " ")}
                          </Link>
                        </div>
                        <div className="col-12">
                          <DropdownItem
                            categories={categories}
                            category_name={category.category_name}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.product.products,
});
export default connect(mapStateToProps, {
  getProductsByCategory,
})(Dropdown);
