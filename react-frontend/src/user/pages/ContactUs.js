import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div className="container">
        <h2>Contact Us</h2>
        <div className="row">
          <div className="col-6">Map</div>
          <div className="col-6">
            <form action="/contactus" method="post">
              <div>
                <input type="text" placeholder="Your Name *" required />
              </div>
              <div>
                <input type="text" placeholder="Your Email *" required />
              </div>
              <div>
                <input type="text" placeholder="Your Phone *" required />
              </div>
              <div>
                <textarea type="text" placeholder="Your Message *" required />
              </div>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
