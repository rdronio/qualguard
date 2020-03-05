import React, { Component } from "react";
import { Container, Segment } from "semantic-ui-react";

import bg_products from "../images/bg_products.png";

export default class Showcase extends Component {
  render() {
    return (
      <Segment
        className="showcase-products"
        vertical
        textAlign="center"
        style={{
          backgroundImage: `url(${bg_products})`
        }}
      >
        <Container
          text
          textAlign="center"
          className="showcase-products-content"
        >
          <div className="showcase-products-content-heading">Products</div>
        </Container>
      </Segment>
    );
  }
}
