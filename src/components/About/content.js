import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";

export default class Content extends Component {
  render() {
    return (
      <Segment className="content-aboutus" vertical textAlign="center">
        <Container text textAlign="center" className="mission-content-aboutus">
          <div className="mission-heading">Mission</div>
          <div className="mission-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </Container>
      </Segment>
    );
  }
}
