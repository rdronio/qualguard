import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";

import bg_aboutus from "../images/bg_aboutus.png";

export default class Showcase extends Component {
  render() {
    return (
      <Segment
        className="showcase-aboutus"
        vertical
        textAlign="center"
        style={{
          backgroundImage: `url(${bg_aboutus})`
        }}
      >
        <Container text textAlign="center" className="showcase-aboutus-content">
          <div className="showcase-aboutus-content-heading">About Us</div>
        </Container>
      </Segment>
    );
  }
}
