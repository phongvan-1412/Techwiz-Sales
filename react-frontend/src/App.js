import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./user/layout/Header-Footer/Header";
import Footer from "./user/layout/Header-Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

import "./user/css/style-mobile.css";
import "./user/css/style-tablet.css";
import "./user/css/style-laptop.css";

import store from "./store";
import { Provider } from "react-redux";
import LandingPage from './user/layout/LandingPageSlider/LandingPage';
import WrapBreadcrumb from './user/pages/Products/WrapBreadcrumb';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <div className="row">
                  <LandingPage/>
                  <WrapBreadcrumb />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
