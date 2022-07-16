import { Link } from "react-router-dom";
import React from "react";
import DropdownItem from "./DropdownItem";
import { getCategoriesByRoot } from "../../../redux/actions/categoriesActions";
import { getProductsByCategory } from "../../../redux/actions/productsActions";

import { useDispatch } from "react-redux";
import { useState } from "react";
const Dropdown = ({ categoriesRoot, categories }) => {
  const [onHover, setOnHover] = useState(false);

  const dispatch = useDispatch();
  const onClick = (event) => {
    dispatch(getProductsByCategory(event.target.name));
    dispatch(getCategoriesByRoot(event.target.name));
  };
  return (
    <div>
      <div className="services-submenu-top"></div>
      <div>
        <ul className="services-submenu" style={{}}>
          <div className="container">
            <div className="row">
              {categoriesRoot.map((category) => {
                return (
                  <div className="col-3" key={category.category_id}>
                    <div className="row">
                      <div className="col-12 " key={category.category_id}>
                        <Link
                          className="submenu-name"
                          to={category.category_name}
                          name={category.category_name}
                          style={{}}
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
};

export default Dropdown;
