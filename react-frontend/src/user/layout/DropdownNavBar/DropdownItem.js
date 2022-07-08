import React from "react";
import { Link } from "react-router-dom";

function DropdownItem({ category_name, categories }) {
  const cates = categories.filter(
    (cat) => cat.category_root_name === category_name
  );
  return (
    <div>
      <div style={{ height: "100px", position: "absolute" }}></div>
      <ul>
        {cates.map((cate) => {
          return (
            <Link key={cate.category_id} to={cate.category_name}>
              <li>{cate.category_name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default DropdownItem;
