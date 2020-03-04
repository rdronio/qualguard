import React, { Component } from "react";
import { Menu, Container, Image } from "semantic-ui-react";

import Header from "./header/header";

export default class Root extends Component {
  render() {
    return <Header /><div>{this.props.children}</div>;
  }
}
