import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import es1 from "./images/eyewashprotection/Combination-300x300.jpg";
import es2 from "./images/eyewashprotection/Pedestal-300x300.jpg";
import es3 from "./images/eyewashprotection/Portable-300x300.jpg";

export default class EyewashStation extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Eyewash Station</div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={es1} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Shower and Pedestal Mount Eyewash Combination
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, High quality </li>
                  <li> Designed for free standing/wall station </li>
                  <li> Twin aerated spray heads </li>
                  <li> Eyewash bowl </li>
                  <li> Overhead shower head </li>
                  <li> 304 Stainless steel construction </li>
                  <li>
                    {" "}
                    Hand operated flag handle switch valve, treadle switch
                    valve, pull rod lever{" "}
                  </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={es2} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Pedestal Mounted Eyewash
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, High quality </li>
                  <li> Designed for free standing/wall station </li>
                  <li> Twin aerated spray heads </li>
                  <li> Eyewash bowl </li>
                  <li> 304 Stainless steel construction </li>
                  <li>
                    {" "}
                    Hand operated flag handle switch valve, treadle switch
                    valve, pull rod lever{" "}
                  </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={es3} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Portable Eyewash
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, High visibility </li>
                  <li> 16-gallon, Gravity-fed eyewash </li>
                  <li> Pinch-valve for positive water flow </li>
                  <li> Retractable table tray for easy use </li>
                  <li> Made from ABS (Acrylonitrile butadiene styrene) </li>
                  <li> Includes mounting brackets </li>
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
              <div className="product-content-heading">
                Spiderking Wall Mounted Eyewash
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, High quality </li>
                  <li> Designed for wall installed station </li>
                  <li> Twin aerated spray heads </li>
                  <li> Eyewash bowl </li>
                  <li> 304 Stainless steel construction </li>
                  <li> Hand operated flag handle switch valve </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
