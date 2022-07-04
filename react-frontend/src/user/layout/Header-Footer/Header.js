import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaFacebook, FaInstagramSquare, FaTwitter, FaBars } from 'react-icons/Fa';

import '../../css/style-laptop.css';
import '../../css/style-tablet.css';
import '../../css/style-mobile.css';

class Header extends Component{
    render(){
        return(
            <header className="row menu">
                <div className="col-md-2 logo-img">
                    <input type="checkbox" id="chk1" />
                    <Link to='/'><img src={require('../../img/logo.jpg')} className="logo" /></Link> 
                </div>

                <div className="col-md-10 main-menu">
                    <ul>
                        <li><Link to ='/about'>About</Link></li>
                        <li><Link to ='/blog'>Blog</Link></li>
                        <li><Link to ='/contact'>Contact</Link></li>
                        <li><Link to ='/product'>Shopping</Link></li>
                        <li><Link to ='/cart'>Cart</Link></li>
                        <li><Link to ='/shipping'>Shipping</Link></li>
                        <li><Link to ='/needhelp'>Needhelp</Link></li>
                        <li><Link to ='/register'>Register</Link></li>
                        <li><Link to ='/login'>Login</Link></li>
                        <li className="meta-social-icons">
                            <Link to='/'><FaFacebook className="meta-facebook"/></Link>
                            <Link to='/'><FaInstagramSquare className="meta-instagram"/></Link>
                            <Link to='/'><FaTwitter className="meta-twitter"/></Link>
                        </li>
                        <li><FaBars className="btn-bars"/></li>
                    </ul>
                </div>
            </header> 
        )
    }
}

export default Header;
