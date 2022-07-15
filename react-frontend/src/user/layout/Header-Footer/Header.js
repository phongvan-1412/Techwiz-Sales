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
import QuickViewCartItems from "../../pages/Cart/QuickViewCartItems";

function Header({ cart, categories, categoriesRoot, updateCart, customer }) {
  const [drop, setDrop] = useState(false);
  const [cartMini, setCartMini] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  const [cartTotalPayment, setCartTotal] = useState(0);
  const [isCustomerLogin, setIsCustomerLogin] = useState(false);

  useEffect(() => {
    const fetchCategories = () => {
      let totalPayment = 0;
      let count = 0;
      cart.forEach((item) => {
        totalPayment += parseInt(
          item.product_quantity * item.product_price_per_unit
        );
        count += parseInt(item.product_quantity);
      });

      setItemsCount(count);
      setCartTotal(totalPayment);
      setIsCustomerLogin(customer.length > 0);
    };

    fetchCategories();
  });

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
            to="#"
            replace
            className="product"
            onMouseEnter={() => setDrop(true)}
            onMouseLeave={() => setDrop(false)}
            style={{ height: "100px" }}
          >
            <p style={{ marginTop: "30px" }}>Product</p>
            {drop && (
              <Dropdown
                categoriesRoot={categoriesRoot}
                categories={categories}
              />
            )}
          </Link>

          {/* <Link to="/shipping" replace className="shipping">
            Shipping
          </Link> */}
          <Link to="/term-and-policy" replace className="needhelp">
            Needhelp
          </Link>

          {isCustomerLogin ? (
            <Link to="/customer" replace className="customer">
              Customer
            </Link>
          ) : (
            <div>
              <a href="http://127.0.0.1:8000/register">Register</a>
              <a href="http://127.0.0.1:8000/login">Login</a>
            </div>
          )}

          <Link to="/" className="meta-facebook">
            <FaFacebook />
          </Link>
          <Link to="/" className="meta-instagram">
            <FaInstagramSquare />
          </Link>
          <Link to="/" className="meta-twitter">
            <FaTwitter />
          </Link>
          
          <Link to="#"
            className="nav-bag"
            style={{ height: "100px", marginTop: "50px" }}
            onMouseEnter={() => setCartMini(true)}
            onMouseLeave={() => setCartMini(false)}
          >
            <AiOutlineShoppingCart style={{color: "white"}}/>
            <br />
            <span className="bag-quantity">
              {itemsCount} items - {cartTotalPayment.toLocaleString()}đ
            </span>
            {cartMini && (
              <QuickViewCartItems cart={cart} updateCart={updateCart} />
            )}
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
