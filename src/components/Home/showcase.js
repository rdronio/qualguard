import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";

// import bg_landingpage from "./images/bg_landingpage.png";
import bg_landingpage from "../images/bg_landingpage2.png";

export default class Showcase extends Component {
  render() {
    return (
      <Segment
        className="showcase"
        vertical
        textAlign="center"
        style={{
          backgroundImage: `url(${bg_landingpage})`
        }}
      >
        <Container text textAlign="left" className="showcase-content">
          <div className="showcase-content-subheading">Why QualGuard?</div>
          <div className="showcase-content-heading">QualGuard</div>
          <div className="showcase-content-desc">
            is committed to personal safety in the workplace, the job site and
            the home. We recommend solutions to help you keep your business
            compliant and your employees work-ready and safe, saving time and
            reducing cost.
          </div>
          <div className="showcase-content-button">
            <div className="showcase-content-button-leftcontainer">
              <a>View Products</a>
            </div>
            <div className="showcase-content-button-rightcontainer">
              <a>Read More</a>
            </div>
          </div>
        </Container>
      </Segment>
    );
  }
}
