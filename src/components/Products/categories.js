import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "../images/qualguard-logo.png";
import Content from "./content";
import HeadProtection from "./categories/headprotection";
import EyeProtection from "./categories/eyeprotection";

export default class Categories extends Component {
  state = {
    visible: true,
    whichComponentToShow: "HeadProtection"
  };

  render() {
    if (this.state.whichComponentToShow === "HeadProtection") {
      return (
        <div>
          <Content />
          <HeadProtection />
        </div>
      );
    } else if (this.state.whichComponentToShow === "EyeProtection") {
      return (
        <div>
          <Content />
          <EyeProtection />
        </div>
      );
    }

    return null;
  }
}
