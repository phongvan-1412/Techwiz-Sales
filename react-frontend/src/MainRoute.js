import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
// import Category from "./user/pages/Category/Category";
// import Content from "./user/layout/Content/Content";
// import HomeContent from "./user/pages/Home/HomeContent";
// import Login from "../src/user/pages/Login-Register/Login";
// import Register from "../src/user/pages/Login-Register/Register";

// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { getBlogs } from "./actions/blogsActions";

import LandingPage from "./user/layout/LandingPageSlider/LandingPage";
import About from "./user/pages/About";
import ContactUs from "./user/pages/ContactUs";
class MainRoute extends Component {
  //   componentDidMount() {
  //     this.props.getBlogs();
  //   }
  render() {
    // const { spotlights } = this.props;

    return (
      <div className="contaier">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contactus" element={<ContactUs />}></Route>

          {/* {spotlights.map((spotlight) => (
            <Route
              key={spotlight.blog_id}
              path={`/${spotlight.category_name}/${spotlight.blog_title}/${spotlight.blog_id}}`}
              element={<Content />}
            ></Route>
          ))}
          {spotlights.map((spotlight) => (
            <Route
              key={spotlight.blog_id}
              path={`/${spotlight.category_name}/${spotlight.blog_title}/:spotlight.blog_id`}
              element={<Category />}
            ></Route>
          ))} */}
          {/* <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route> */}
        </Routes>
      </div>
    );
  }
}
// MainRoute.propTypes = {
//   getBlogs: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   spotlights: state.spotlight.spotlights,
// });

//export default connect(mapStateToProps,{getBlogs})(MainRoute);
export default MainRoute;
