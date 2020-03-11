import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import hp1 from "./images/headprotection/Helmet-Pinlock-Yellow-300x300.jpg";
import hp2 from "./images/headprotection/Helmet-Ratchet-Yellow-300x300.jpg";
import hp3 from "./images/headprotection/spiderkinghardhatwithairvent.JPG";
import hp4 from "./images/headprotection/full-brim-hard-hat-900x900-300x300.png";
import hp5 from "./images/headprotection/Pinlock-300x300.jpg";
import hp6 from "./images/headprotection/spiderkingheadsuspensionratchettype.JPG";
import hp7 from "./images/headprotection/Chinstrap-1-300x300.jpg";

export default class HeadProtection extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Head Protection</div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp1} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Hardhat with Chinstrap-Pinlock Type
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty and lightweight Hardhat </li>
                  <li> 8-fixing point suspension (Pinlock type) </li>
                  <li> Made from ABS (Acrylonltrlle butadlene styrene) </li>
                  <li> Impact Strength Rating: 50 Joules </li>
                  <li> Temperature Range: - l 0°C to 50°C </li>
                  <li> Earmuff attachment slots </li>
                  <li> Chinstrap Included </li>
                  <li> CE EN 397:1995 Compliant </li>
                  <li> ANSI Certified </li>
                  <li> OSHC Certified: Class A </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp2} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Hardhat with Chinstrap-Ratchet Type
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty and lightweight Hardhat </li>
                  <li> 8-flxlng point suspension (Ratchet type) </li>
                  <li> Made from ABS (Acrylonltrlle butadlene styrene) </li>
                  <li> Impact Strength Rating: 50 Joules </li>
                  <li> Temperature Range: - l 0°C to 50°C </li>
                  <li> Earmuff attachment slots </li>
                  <li> Chinstrap Included </li>
                  <li> CE EN 397 Compliant </li>
                  <li> ANSI Certified </li>
                  <li> OSHC Certified: Class A </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp3} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Hardhat with Airvent
              </div>
              <div className="product-desc">
                <ul>
                  <li> ABS Shell (Polypropylene (PP) Material) </li>
                  <li> Equipped with shock absorbing </li>
                  <li> Equipped with shock absorbing </li>
                  <li> Chin strap included. </li>
                  <li> Complies with EN 397:1995+A </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp4} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Full Brim Hard Hat
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty Full Brim Hardhat </li>
                  <li> 4-flxlng point suspension </li>
                  <li> Plnlock type locking mechanism </li>
                  <li> Made from PP (Polypropylene) </li>
                  <li> CE EN 397:1995 Compliant </li>
                  <li> ANSI 289.1-2003 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp5} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Head Suspension Pinlock Type
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty and comfortable Helmet Suspension </li>
                  <li> 8-flxlng point</li>
                  <li> Ratchet type locking mechanism </li>
                  <li> Made from PP (Polypropylene) </li>
                  <li> Size Range: 6.5"-8" (52cm-64ccm) </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp6} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Head Suspension Ratchet Type
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty and comfortable Helmet Suspension </li>
                  <li> 8-flxlng point</li>
                  <li> Pinlock type locking mechanism </li>
                  <li> Made from PP (Polypropylene) </li>
                  <li> Size Range: 6.5"-8" (52cm-64ccm) </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={hp7} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Chinstrap
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty Chinstrap </li>
                  <li> 2-polnt attachment </li>
                  <li> Polyester/Nylon Straps </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
