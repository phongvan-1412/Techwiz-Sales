import React, { useState } from "react";
import { serviveDropdown } from "./NavItems";
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <div>
      <div style={{ height: "100px" }}></div>
      <div>
        <ul
          className="services-submenu"
          style={{
            background: "black",
            width: "400px",
            marginLeft: "-100px",
            position: "absolute",
          }}
        >
          {serviveDropdown.map((item) => {
            return (
              <div className="container">
                <div className="row">
                  <div className="col-4">
                    <ul>
                      <li key="item.id">
                        <Link
                          to={item.path}
                          className={item.cName}
                          style={{ cursor: "pointer" }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <ul>
                      <li key="item.id">
                        <Link
                          to={item.path}
                          className={item.cName}
                          style={{ cursor: "pointer" }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <ul>
                      <li key="item.id">
                        <Link
                          to={item.path}
                          className={item.cName}
                          style={{ cursor: "pointer" }}
                        >
                          {item.title}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
