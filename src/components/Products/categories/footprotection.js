import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

export default class FootProtection extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Foot Protection</div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={logo} size="small" className="product-image" />
              <div className="product-content-heading">Eye Protection</div>
              <div className="product-desc">
                <ul>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={logo} size="small" className="product-image" />
              <div className="product-content-heading">Eye Protection</div>
              <div className="product-desc">
                <ul>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={logo} size="small" className="product-image" />
              <div className="product-content-heading">Eye Protection</div>
              <div className="product-desc">
                <ul>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={logo} size="small" className="product-image" />
              <div className="product-content-heading">Eye Protection</div>
              <div className="product-desc">
                <ul>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                  <li> Lorem ipsum dolor sit amet </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
