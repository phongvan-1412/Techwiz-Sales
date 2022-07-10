import { Link } from "react-router-dom";
import React from "react";
import DropdownItem from "./DropdownItem";
const Dropdown = ({ categoriesRoot, categories }) => {

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
                        >
                          {category.category_name.replace('-',' ')}
                        </Link>

                        <div>
                          <DropdownItem categories={categories} category_name={category.category_name}/>
                        </div>
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
