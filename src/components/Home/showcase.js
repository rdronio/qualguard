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
          <div className="showcase-content-subheading">
            Lorem ipsum dolor sit amet
          </div>
          <div className="showcase-content-heading">Lorem ipsum dolor sit</div>
          <div className="showcase-content-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
