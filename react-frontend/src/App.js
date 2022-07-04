import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./user/layout/Header-Footer/Header";
// import Footer from "./user/layout/Header-Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./user/css/style-mobile.css";
import "./user/css/style-tablet.css";
import "./user/css/style-laptop.css";


class App extends Component {
  render() {
    return (
      // <Provider>
        <Router>
          <div>
            <Header />
            
            {/* <Footer /> */}
          </div>
        </Router>
      // </Provider>
    );
  }
}

export default App;
