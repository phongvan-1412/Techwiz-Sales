import React, { Component } from "react";
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

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-menu">
          <header className="menu">
            <Link to="/" replace>
              <img
                src={require("../../img/Header/logo.jpg")}
                className="logo"
              />
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
            <Link to="/product" replace className="shopping">
              Shopping
            </Link>
            <Link to="/cart" replace className="cart">
              Cart
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
}

export default Header;
