import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaBars,
} from "react-icons/fa";

import "../../css/style-mobile.css";
import "../../css/style-tablet.css";
import "../../css/style-laptop.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Dropdown from "../DropdownNavBar/Dropdown";
import axios from "axios";

function Header() {
  const [drop, setDrop] = useState(false);
  const [categoriesRoot, setCategoriesRoot] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const resRoot = await axios.get(
        "http://127.0.0.1:8000/api/selectcategoryroot"
      );
      const resCate = await axios.get(
        "http://127.0.0.1:8000/api/selectallcategory"
      );
      setCategoriesRoot(resRoot.data);
      setCategories(resCate.data);
    };

    fetchCategories();
  }, []);
  return (
    <div>
      <div className="header-menu">
        <header className="menu">
          <Link to="/" replace>
            <img src={require("../../img/Header/logo.jpg")} className="logo" />
          </Link>
          <Link to="/about" replace className="about">
            About
          </Link>
          {/* <Link to="/blog" replace className="blog">
              Blog
            </Link> */}
          <Link to="/contactus" replace className="contact">
            Contact
          </Link>
          <Link
            to="/product"
            replace
            className="product"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
            style={{ height: "100px"}}
          >
            <p style={{ marginTop: "30px" }}>Product</p> 
            {drop && <Dropdown categoriesRoot={categoriesRoot} categories={categories}/>}
          </Link>

          <Link to="/cart" replace className="cart">
            <div className="nav-bag">
              <AiOutlineShoppingCart />
              <span className="bag-quantity">
                <span>1</span>
              </span>
            </div>
          </Link>
          <Link to="/shipping" replace className="shipping">
            Shipping
          </Link>
          <Link to="/needhelp" replace className="needhelp">
            Needhelp
          </Link>
          <Link to="/register" replace className="register">
            Register
          </Link>
          <Link to="/login" replace className="login">
            Login
          </Link>
          <Link to="/" className="meta-facebook">
            <FaFacebook />
          </Link>
          <Link to="/" className="meta-instagram">
            <FaInstagramSquare />
          </Link>
          <Link to="/" className="meta-twitter">
            <FaTwitter />
          </Link>
          <Link to="/" className="btn-bars">
            <FaBars />
          </Link>
        </header>
      </div>
    </div>
  );
}

export default Header;
