import React, { Component } from "react";
import { getProductsByCategory } from "../../../actions/productsActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
        <div className="row">
          {cates.map((cate) => {
            return (
              <div className="col-12" key={cate.category_id}>
                <Link
                  key={cate.category_id}
                  to={`/${cate.category_root_name}/${cate.category_name}`}
                  name={cate.category_name}
                  onClick={onClick}
                >
                  {cate.category_name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(null, {
  getProductsByCategory,
})(DropdownItem);
