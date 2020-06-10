import React, { Component } from "react";
import { Container, Segment, Grid, Image } from "semantic-ui-react";

import logo from "./images/qualguard-logo.png";

import fp1 from "./images/faceprotection/spk-weldingmask-with-bracket-900x900-300x300.png";
import fp2 from "./images/faceprotection/FSVwBG-300x300.jpg";
import fp3 from "./images/faceprotection/Bracket-300x300.jpg";
import fp4 from "./images/faceprotection/WMwRatchet-300x300.jpg";
import fp5 from "./images/faceprotection/spiderkingbrowguard.JPG";
import fp6 from "./images/faceprotection/faceshield-visor-900x900-300x300.png";

export default class FaceProtection extends Component {
  render() {
    return (
      <Segment className="content-products" vertical textAlign="center">
        <Container>
          <div className="product"> Face Protection</div>
          <Grid stackable columns={3}>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp1} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Welding Mask With Bracket
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty design </li>
                  <li> Safety helmet attachment </li>
                  <li> Made from PP [Polypropylene) Shell </li>
                  <li> Aluminum Bracket </li>
                  <li> Lift-up front lens </li>
                  <li> LLens Size: 4.25"x2" or l 08mm x 51mm </li>
                  <li> CE EN 175 Compliant </li>
                  <li> ANSI Z89.1 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp2} size="small" className="product-image" />
              <div className="product-content-heading">
                {" "}
                Spiderking Faceshield Visor with Browguard{" "}
              </div>
              <div className="product-desc">
                <ul>
                  <li>
                    {" "}
                    Combination of Spiderking Browguard and Spiderking
                    Faceshield Visor{" "}
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
              <Image src={fp3} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Faceshield Bracket
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Safety helmet attachment </li>
                  <li> Made from ABS (Acrylonitrile Butadiene Styrene) </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z89.1 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp4} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Welding Mask, Rachel Type-Heavy Medium
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty design </li>
                  <li> Ratchet Type locking mechanism </li>
                  <li> Made from PP (Polypropylene) </li>
                  <li> Lift-up front lens </li>
                  <li> Lens Size: 4.25"x2" or l 08mm x 51mm </li>
                  <li> CE EN 175 Compliant </li>
                  <li> ANSI Z89.1 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp5} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Browguard
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty, Impact Resistant </li>
                  <li> Ratchet type locking mechanism </li>
                  <li> Made from ABS (Acrylonitrile Butadiene Styrene) </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z89.1 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column
              mobile={16}
              tablet={16}
              computer={5}
              className="product-content"
            >
              <Image src={fp6} size="small" className="product-image" />
              <div className="product-content-heading">
                Spiderking Faceshield Visor
              </div>
              <div className="product-desc">
                <ul>
                  <li> Heavy-duty design </li>
                  <li>
                    {" "}
                    Provide protection against high impact, splash of liquid,
                    heat, molten metal and hot solids.{" "}
                  </li>
                  <li> Made from PC (Polycarbonate) </li>
                  <li> Size: 8" x 15.5 " or 203mm x 393mm </li>
                  <li> Temperature range: -5°C to 55°C </li>
                  <li> CE EN 166 Compliant </li>
                  <li> ANSI Z87.1 Compliant </li>
                </ul>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
