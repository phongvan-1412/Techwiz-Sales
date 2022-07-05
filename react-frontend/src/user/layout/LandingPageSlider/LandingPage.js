import React, { Component } from "react";
import LandingPageSlider1 from "./LandingPageSlider1";
import LandingPageSlider2 from "./LandingPageSlider2";
import LandingPageSlider3 from "./LandingPageSlider3";
import TopSlider from "./TopSlider";
import BottomImg from "./BottomImg";

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <TopSlider />
        <LandingPageSlider1 />
        <LandingPageSlider2 />
        <LandingPageSlider3 />
        <BottomImg />
      </div>
    );
  }
}

export default LandingPage;
