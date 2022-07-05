import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaFacebook, FaInstagramSquare, FaTwitter, FaBars } from 'react-icons/Fa';

import '../../css/style-mobile.css';
import '../../css/style-tablet.css';
import '../../css/style-laptop.css';


class Header extends Component{
    render(){
        return(
            <header className="menu">
                <Link to='/'><img src={require('../../img/Header/logo.jpg')} className="logo" /></Link> 
                <Link to ='/about' className="about">About</Link>
                <Link to ='/blog' className="blog">Blog</Link>
                <Link to ='/contact' className="contact">Contact</Link>
                <Link to ='/product' className="shopping">Shopping</Link>
                <Link to ='/cart' className="cart">Cart</Link>
                <Link to ='/shipping' className="shipping">Shipping</Link>
                <Link to ='/needhelp' className="needhelp">Needhelp</Link>
                <Link to ='/register' className="register">Register</Link>
                <Link to ='/login' className="login">Login</Link>
                <Link to='/' className="meta-facebook"><FaFacebook /></Link>
                <Link to='/' className="meta-instagram"><FaInstagramSquare /></Link>
                <Link to='/' className="meta-twitter"><FaTwitter /></Link>
                <Link to='/' className="btn-bars"><FaBars /></Link>
            </header> 
        )
    }
}

export default Header;
