import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getProductsByCategory } from "../../../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { productSelector } from "../../../Selector/selectors";

const DropdownItem = ({ category_name, categories }) => {
  const cates = categories.filter(
    (cat) => cat.category_root_name === category_name
  );
  const products = useSelector(productSelector);
  const dispatch = useDispatch();
  const onClick = (event) => {
    dispatch(getProductsByCategory(event.target.name));
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
};
export default DropdownItem;
